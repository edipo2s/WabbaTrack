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

var userID: String? = null
var userMatches: Map<DeckClass, Map<DeckClass, List<Match>>>? = null
var matchesMode: MatchMode = MatchMode.RANKED
var matchesResultAsWinRate = false
var currentSeason: Season? = null

val radio_ranked by lazy { document.getElementById("statistics-ranked") as HTMLLabelElement }
val radio_casual by lazy { document.getElementById("statistics-casual") as HTMLLabelElement }
val radio_arena by lazy { document.getElementById("statistics-arena") as HTMLLabelElement }
val toogle_winrate by lazy { document.getElementById("statistics-winrate") as HTMLLabelElement }
val dropdown_seasons by lazy { document.getElementById("statistics-seasons") as HTMLUListElement }
val dropdown_seasons_label by lazy { document.getElementById("statistics-seasons-label") as HTMLSpanElement }

fun Main() {
    userID = URL(document.URL).searchParams.get("id")
    buildStatisticsTable()
    configureListeners()
    getUserMatches { matches ->
        userMatches = matches
                .groupBy { it.player.cls }
                .mapValues {
                    it.value.groupBy { it.opponent.cls }
                }
        showMatches()
    }
    getSeasons { seasons ->
        buildSeasonFilter(seasons)
    }
}

private fun configureListeners() {
    radio_ranked.onchange = {
        matchesMode = MatchMode.RANKED
        showMatches()
    }
    radio_casual.onchange = {
        matchesMode = MatchMode.CASUAL
        showMatches()
    }
    radio_arena.onchange = {
        matchesMode = MatchMode.ARENA
        showMatches()
    }
    toogle_winrate.onchange = {
        matchesResultAsWinRate = toogle_winrate.hasClass("is-checked")
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
        DeckClass.values().forEach { playerCls ->
            getElementById("player${playerCls.name}")?.apply {
                while (childElementCount > 1) {
                    lastChild?.let {
                        removeChild(it)
                    }
                }
                DeckClass.values().forEach { opponentCls ->
                    appendChild(createElement("th").apply {
                        setAttribute("style", "text-align: center;")
                        val vsMatches = userMatches?.get(playerCls)?.get(opponentCls)?.
                                filter { it.mode == matchesMode }?.
                                filter { currentSeason == null || it.season == currentSeason?.id }
                        val wins = vsMatches?.count { it.win } ?: 0
                        val loses = vsMatches?.count { !it.win } ?: 0
                        val matches = wins + loses
                        val winRate = 100 / matches * wins
                        if (matchesResultAsWinRate) {
                            textContent = "$winRate%".takeIf { matches > 0 } ?: "-"
                        } else {
                            textContent = "$wins/$loses".takeIf { matches > 0 } ?: "-"
                        }
                    })
                }
            }
        }
    }
}

private fun buildStatisticsTable() {
    with(document) {
        DeckClass.values().forEach { cls ->
            getElementById("statistics-player-cls")?.appendChild(
                    createElement("tr").apply {
                        id = "player${cls.name}"
                        appendChild(createElement("td").apply {
                            addClass("mdl-data-table__cell--non-numeric")
                            addDeckClassIcons(cls)
                        })
                    }
            )
            getElementById("statistics-opponent-cls")?.appendChild(
                    createElement("th").apply {
                        addDeckClassIcons(cls)
                    }
            )
        }
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
            dropdown_seasons_label.textContent = textContent
            js("$('.mdl-menu__container')").removeClass("is-visible")
            showMatches()
        }
        appendChild(document.createElement("span").apply {
            addClass("mdl-ripple")
        })
        js("componentHandler").upgradeElement(this)
    }
}