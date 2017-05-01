package com.ediposouza

import com.ediposouza.data.Match
import com.ediposouza.data.MatchMode
import com.ediposouza.data.Season
import com.ediposouza.model.DeckClass
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLLabelElement
import org.w3c.dom.HTMLSpanElement
import org.w3c.dom.HTMLUListElement
import org.w3c.dom.url.URL
import org.w3c.fetch.RequestCredentials
import org.w3c.fetch.RequestInit
import org.w3c.fetch.SAME_ORIGIN
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.addClass
import kotlin.dom.hasClass
import kotlin.js.Json
import kotlin.js.json

val TESLEGENDS_DB_URL = "https://tes-legends-assistant.firebaseio.com"

val statistics_table_player by lazy { document.getElementById("statistics-player-cls") as HTMLElement }
val statistics_table_opponent by lazy { document.getElementById("statistics-opponent-cls") as HTMLElement }

val radio_ranked by lazy { document.getElementById("statistics-ranked") as HTMLLabelElement }
val radio_casual by lazy { document.getElementById("statistics-casual") as HTMLLabelElement }
val radio_arena by lazy { document.getElementById("statistics-arena") as HTMLLabelElement }
val toogle_winrate by lazy { document.getElementById("statistics-winrate") as HTMLLabelElement }
val dropdown_seasons by lazy { document.getElementById("statistics-seasons") as HTMLUListElement }
val dropdown_seasons_label by lazy { document.getElementById("statistics-seasons-label") as HTMLSpanElement }

var userID: String? = null
var userMatches: List<Match>? = null

var currentMode: MatchMode = MatchMode.RANKED
var currentSeason: Season? = null
    set(value) {
        field = value
        dropdown_seasons_label.textContent = value?.let { "${it.year} ${it.month}" } ?: "All Seasons"
    }
var resultAsWinRate = false

fun Main() {
    userID = URL(document.URL).searchParams.get("id")
    buildStatisticsTable()
    configureListeners()
    getSeasons { seasons ->
        buildSeasonFilter(seasons)
        if (seasons.isNotEmpty()) {
            currentSeason = seasons[0]
        }
    }
    getUserMatches { matches ->
        userMatches = matches.sortedByDescending { it.uuid }
        showMatches()
    }
}

private fun configureListeners() {
    radio_ranked.onchange = {
        currentMode = MatchMode.RANKED
        showMatches()
    }
    radio_casual.onchange = {
        currentMode = MatchMode.CASUAL
        showMatches()
    }
    radio_arena.onchange = {
        currentMode = MatchMode.ARENA
        showMatches()
    }
    toogle_winrate.onchange = {
        resultAsWinRate = toogle_winrate.hasClass("is-checked")
        showMatches()
    }
}

@Suppress("UnsafeCastFromDynamic", "UNCHECKED_CAST_TO_NATIVE_INTERFACE")
private fun getUserMatches(onSuccess: (List<Match>) -> Unit) {
    window.fetch("$TESLEGENDS_DB_URL/users/$userID/matches.json", object : RequestInit {
        override var method: String? = "GET"
        override var credentials: RequestCredentials? = RequestCredentials.SAME_ORIGIN
        override var headers: dynamic = json("Accept" to "application/json")

    }).then({ response ->
        response.json().then({ json ->
            val keys: Array<String> = js("Object").keys(json as Json)
            onSuccess(keys.map { Match.parse(it, json[it] as Json) })
        })
    })
}

@Suppress("UnsafeCastFromDynamic", "UNCHECKED_CAST_TO_NATIVE_INTERFACE")
private fun getSeasons(onSuccess: (List<Season>) -> Unit) {
    window.fetch("$TESLEGENDS_DB_URL/seasons.json", object : RequestInit {
        override var method: String? = "GET"
        override var credentials: RequestCredentials? = RequestCredentials.SAME_ORIGIN
        override var headers: dynamic = json("Accept" to "application/json")

    }).then({ response ->
        response.json().then({ json ->
            val keys: Array<String> = js("Object").keys(json as Json)
            onSuccess(keys.toList().sortedByDescending { it }.map { Season(it) })
        })
    })
}

private fun showMatches() {
    with(document) {
        // History
        getElementById("history-list")?.apply {
            removeAllChilds()
            userMatches?.filter { it.mode == currentMode }
                    ?.filter { currentSeason == null || it.season == currentSeason?.id }
                    ?.forEach { match ->
                        appendChild(createElement("tr").apply {
                            appendChild(createElement("th").apply {
                                setAttribute("style", "text-align: center;")
                                appendChild(createElement("img".takeIf { match.first } ?: "div").apply {
                                    addClass("wt-history-first")
                                    if (match.first) {
                                        setAttribute("src", "images/ic_first.png")
                                    }
                                })
                            })
                            appendChild(createElement("th").apply {
                                setAttribute("style", "text-align: center;")
                                addDeckClassIcons(match.player.cls)
                                appendChild(createElement("span").apply {
                                    addClass("wt-history-vs")
                                    textContent = "vs"
                                })
                                addDeckClassIcons(match.opponent.cls)
                            })
                            appendChild(createElement("th").apply {
                                setAttribute("style", "text-align: center;")
                                appendChild(createElement("img".takeIf { match.legend } ?: "div").apply {
                                    addClass("wt-history-legend")
                                    if (match.legend) {
                                        setAttribute("src", "images/ic_legend.png")
                                    }
                                })
                            })
                            appendChild(createElement("th").apply {
                                setAttribute("style", "text-align: center;")
                                appendChild(createElement("span").apply {
                                    addClass("wt-history-rank")
                                    if (match.rank > 0) {
                                        textContent = "${match.rank}"
                                    }
                                })
                            })
                            appendChild(createElement("th").apply {
                                setAttribute("style", "text-align: center;")
                                appendChild(createElement("span").apply {
                                    addClass("wt-history-win".takeIf { match.win } ?: "wt-history-loss")
                                    textContent = "Win".takeIf { match.win } ?: "Loss"
                                })
                            })
                            appendChild(createElement("th").apply {
                                setAttribute("style", "text-align: center;")
                                appendChild(createElement("span").apply {
                                    addClass("wt-history-time")
                                    textContent = match.uuid.substringBeforeLast("T").replace("-", "/")
                                })
                            })
                        })
                    }
        }
        // Statistics
        var totalWins = 0
        var totalLosses = 0
        val matchesByClass = userMatches
                ?.groupBy { it.player.cls }
                ?.mapValues {
                    it.value.groupBy { it.opponent.cls }
                }
        DeckClass.values().forEach { playerCls ->
            getElementById("player${playerCls.name}")?.apply {
                while (childElementCount > 1) {
                    lastChild?.let {
                        removeChild(it)
                    }
                }
                var totalClassWins = 0
                var totalClassLosses = 0
                DeckClass.values().forEach { opponentCls ->
                    appendChild(createElement("th").apply {
                        setAttribute("style", "text-align: center;")
                        val vsMatches = matchesByClass?.get(playerCls)?.get(opponentCls)
                                ?.filter { it.mode == currentMode }
                                ?.filter { currentSeason == null || it.season == currentSeason?.id }
                        val wins = vsMatches?.count { it.win } ?: 0
                        val loses = vsMatches?.count { !it.win } ?: 0
                        totalClassWins += wins
                        totalClassLosses += loses
                        val matches = wins + loses
                        val winRate = 100 * wins / matches
                        if (resultAsWinRate) {
                            textContent = "$winRate%".takeIf { matches > 0 } ?: "-"
                        } else {
                            textContent = "$wins/$loses".takeIf { matches > 0 } ?: "-"
                        }
                    })
                }
                appendChild(createElement("th").apply {
                    setAttribute("style", "text-align: center;")
                    val totalClassMatches = totalClassWins + totalClassLosses
                    val winRate = 100 * totalClassWins / totalClassMatches
                    if (resultAsWinRate) {
                        textContent = "$winRate%".takeIf { totalClassMatches > 0 } ?: "-"
                    } else {
                        textContent = "$totalClassWins/$totalClassLosses".takeIf { totalClassMatches > 0 } ?: "-"
                    }
                })
                totalWins += totalClassWins
                totalLosses += totalClassLosses
            }
        }
        getElementById("playerTotal")?.apply {
            while (childElementCount > 1) {
                lastChild?.let {
                    removeChild(it)
                }
            }
            val matchesByOpponent = userMatches?.groupBy { it.opponent.cls }
            DeckClass.values().forEach { opponentCls ->
                appendChild(createElement("th").apply {
                    setAttribute("style", "text-align: center;")
                    val vsMatches = matchesByOpponent
                            ?.get(opponentCls)
                            ?.filter { it.mode == currentMode }
                            ?.filter { currentSeason == null || it.season == currentSeason?.id }
                    val wins = vsMatches?.count { it.win } ?: 0
                    val loses = vsMatches?.count { !it.win } ?: 0
                    val matches = wins + loses
                    val winRate = 100 * wins / matches
                    if (resultAsWinRate) {
                        textContent = "$winRate%".takeIf { matches > 0 } ?: "-"
                    } else {
                        textContent = "$wins/$loses".takeIf { matches > 0 } ?: "-"
                    }
                })
            }
            appendChild(createElement("th").apply {
                setAttribute("style", "text-align: center;")
                val totalMatches = totalWins + totalLosses
                val winRate = 100 * totalWins / totalMatches
                if (resultAsWinRate) {
                    textContent = "$winRate%".takeIf { totalMatches > 0 } ?: "-"
                } else {
                    textContent = "$totalWins/$totalLosses".takeIf { totalMatches > 0 } ?: "-"
                }
            })
        }
    }
}

private fun buildStatisticsTable() {
    with(document) {
        DeckClass.values().forEach { cls ->
            statistics_table_player.appendChild(
                    createElement("tr").apply {
                        id = "player${cls.name}"
                        appendChild(createElement("td").apply {
                            addDeckClassIcons(cls)
                        })
                    }
            )
            statistics_table_opponent.appendChild(
                    createElement("th").apply {
                        addDeckClassIcons(cls)
                    }
            )
        }
        statistics_table_opponent.appendChild(
                createElement("th").apply {
                    textContent = "Total"
                }
        )
        statistics_table_player.appendChild(
                createElement("tr").apply {
                    id = "playerTotal"
                    appendChild(createElement("td").apply {
                        textContent = "Total"
                    })
                }
        )
    }
}

fun buildSeasonFilter(seasons: List<Season>) {
    dropdown_seasons.appendChild(createSeasonItem(null))
    seasons.forEach { season ->
        dropdown_seasons.appendChild(createSeasonItem(season))
    }
}

@Suppress("UnsafeCastFromDynamic")
private fun createSeasonItem(season: Season?): HTMLElement {
    return (document.createElement("li") as HTMLElement).apply {
        addClass("mdl-menu__item mdl-js-ripple-effect")
        textContent = season?.let { "${it.year} ${it.month}" } ?: "All Seasons"
        onclick = {
            currentSeason = season
            js("$('.mdl-menu__container')").removeClass("is-visible")
            showMatches()
        }
        appendChild(document.createElement("span").apply {
            addClass("mdl-ripple")
        })
        js("componentHandler").upgradeElement(this)
    }
}