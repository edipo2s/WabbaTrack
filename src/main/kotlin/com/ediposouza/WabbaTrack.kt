package com.ediposouza

import com.ediposouza.data.Match
import com.ediposouza.data.MatchMode
import com.ediposouza.data.Season
import com.ediposouza.model.DeckClass
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

var userID: String? = null
var userMatches: List<Match>? = null

var currentMode: MatchMode = MatchMode.RANKED
var currentSeason: Season? = null
    set(value) {
        field = value
        UI.updateSeasonLabel(value)
    }
var resultAsWinRate = false

fun Main() {
    userID = URL(document.URL).searchParams.get("id")
    UI.buildStatisticsTable()
    configureListeners()
    getSeasons { seasons ->
        if (seasons.isNotEmpty()) {
            currentSeason = seasons[0]
        }
        UI.buildSeasonFilter(seasons) { season ->
            currentSeason = season
            showMatches()
        }
    }
    getUserMatches { matches ->
        userMatches = matches.sortedByDescending { it.uuid }
        showMatches()
    }
}

private fun configureListeners() {
    UI.radio_ranked.onchange = {
        currentMode = MatchMode.RANKED
        showMatches()
    }
    UI.radio_casual.onchange = {
        currentMode = MatchMode.CASUAL
        showMatches()
    }
    UI.radio_arena.onchange = {
        currentMode = MatchMode.ARENA
        showMatches()
    }
    UI.toogle_winrate.onchange = {
        resultAsWinRate = UI.toogle_winrate.hasClass("is-checked")
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
                    val classMatches = matchesByClass?.get(playerCls)?.get(opponentCls)
                            ?.filter { it.mode == currentMode }
                            ?.filter { currentSeason == null || it.season == currentSeason?.id }
                    val wins = classMatches?.count { it.win } ?: 0
                    val loses = classMatches?.count { !it.win } ?: 0
                    totalClassWins += wins
                    totalClassLosses += loses
                    appendChild(UI.createMatchResult(wins, loses))
                }
                appendChild(UI.createMatchResult(totalClassWins, totalClassLosses))
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
                val classMatches = matchesByOpponent
                        ?.get(opponentCls)
                        ?.filter { it.mode == currentMode }
                        ?.filter { currentSeason == null || it.season == currentSeason?.id }
                val wins = classMatches?.count { it.win } ?: 0
                val loses = classMatches?.count { !it.win } ?: 0
                appendChild(UI.createMatchResult(wins, loses))
            }
            appendChild(UI.createMatchResult(totalWins, totalLosses))
        }
    }
}