package com.ediposouza

import com.ediposouza.data.Match
import com.ediposouza.data.MatchMode
import com.ediposouza.model.DeckClass
import org.w3c.dom.url.URL
import org.w3c.fetch.RequestCredentials
import org.w3c.fetch.RequestInit
import org.w3c.fetch.SAME_ORIGIN
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.addClass
import kotlin.dom.appendText
import kotlin.js.Json
import kotlin.js.json

var userID: String? = null
var userMatches: Map<DeckClass, Map<DeckClass, List<Match>>>? = null
var matchesMode: MatchMode = MatchMode.RANKED

fun Main() {
    userID = URL(document.URL).searchParams.get("id")
    buildStatisticsTable()
    getUserMatches { matches ->
        userMatches = matches
                .groupBy { it.player.cls }
                .mapValues {
                    it.value.groupBy { it.opponent.cls }
                }
        showMatches()
    }
}

@Suppress("UnsafeCastFromDynamic", "UNCHECKED_CAST_TO_NATIVE_INTERFACE")
private fun getUserMatches(onSuccess: (List<Match>) -> Unit) {
    window.fetch("https://tes-legends-assistant.firebaseio.com/users/$userID/matches.json", object : RequestInit {
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

private fun showMatches() {
    with(document) {
        DeckClass.values().forEach { playerCls ->
            getElementById("player${playerCls.name}")?.apply {
                DeckClass.values().forEach { opponentCls ->
                    appendChild(createElement("th").apply {
                        val vsMatches = userMatches?.get(playerCls)?.get(opponentCls)?.filter { it.mode == matchesMode }
                        textContent = "${vsMatches?.count { it.win } ?: 0}/${vsMatches?.count { !it.win } ?: 0}"
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
                            appendChild(createElement("img").apply {
                                addClass("wabbatrack-attr")
                                setAttribute("src", "images/Attribute/${cls.attr1.name}.png")
                            })
                            appendText(" ")
                            appendChild(createElement("img").apply {
                                addClass("wabbatrack-attr")
                                setAttribute("src", "images/Attribute/${cls.attr2.name}.png")
                            })
                        })
                    }
            )
            getElementById("statistics-opponent-cls")?.appendChild(
                    createElement("th").apply {
                        appendChild(createElement("img").apply {
                            addClass("wabbatrack-attr")
                            setAttribute("src", "images/Attribute/${cls.attr1.name}.png")
                        })
                        appendText(" ")
                        appendChild(createElement("img").apply {
                            addClass("wabbatrack-attr")
                            setAttribute("src", "images/Attribute/${cls.attr2.name}.png")
                        })
                    }
            )
        }
    }
}
