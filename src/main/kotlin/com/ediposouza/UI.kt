package com.ediposouza

import com.ediposouza.data.Match
import com.ediposouza.data.Season
import com.ediposouza.model.DeckClass
import org.w3c.dom.*
import kotlin.browser.document
import kotlin.dom.addClass
import kotlin.dom.removeClass

/**
 * Created by EdipoSouza on 5/1/17.
 */
object UI {

    val header by lazy { document.getElementById("header") as HTMLElement }
    val statistics_table_player by lazy { document.getElementById("statistics-player-cls") as HTMLElement }
    val statistics_table_opponent by lazy { document.getElementById("statistics-opponent-cls") as HTMLElement }

    val radio_ranked by lazy { document.getElementById("statistics-ranked") as HTMLLabelElement }
    val radio_casual by lazy { document.getElementById("statistics-casual") as HTMLLabelElement }
    val radio_arena by lazy { document.getElementById("statistics-arena") as HTMLLabelElement }
    val toogle_winrate by lazy { document.getElementById("statistics-winrate") as HTMLLabelElement }
    val dropdown_seasons by lazy { document.getElementById("statistics-seasons") as HTMLUListElement }
    val dropdown_seasons_label by lazy { document.getElementById("statistics-seasons-label") as HTMLSpanElement }

    fun addTabs() {
        with(document) {
            header.apply {
                appendChild(createElement("div").apply {
                    addClass("wt-tabs mdl-layout__tab-bar mdl-js-ripple-effect")
                    appendChild(createElement("a").apply {
                        addClass("mdl-layout__tab is-active")
                        setAttribute("href", "#history")
                        textContent = "History"
                    })
                    appendChild(createElement("a").apply {
                        addClass("mdl-layout__tab")
                        setAttribute("href", "#statistics")
                        textContent = "Statistics"
                    })
                })
            }
        }
    }

    fun showUserContainers() {
        with(document) {
            getElementsByClassName("wt-container-noid").foreach {
                it?.addClass("hidden")
            }
            getElementsByClassName("mdl-layout__tab-bar-container").foreach {
                it?.removeClass("hidden")
            }
            getElementsByClassName("wt-container").foreach {
                it?.removeClass("hidden")
            }
        }
    }

    fun createHistoryMatchItem(match: Match): Element {
        with(document) {
            return createElement("tr").apply {
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
            }
        }
    }

    fun buildStatisticsTable() {
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

    fun buildSeasonFilter(seasons: List<Season>, onItemClick: (Season?) -> Unit) {
        dropdown_seasons.appendChild(createSeasonItem(null, onItemClick))
        seasons.forEach { season ->
            dropdown_seasons.appendChild(createSeasonItem(season, onItemClick))
        }
    }

    fun updateSeasonLabel(season: Season?) {
        dropdown_seasons_label.textContent = season?.let { "${it.year} ${it.month}" } ?: "All Seasons"
    }

    @Suppress("UnsafeCastFromDynamic")
    private fun createSeasonItem(season: Season?, onItemClick: (Season?) -> Unit): HTMLElement {
        return (document.createElement("li") as HTMLElement).apply {
            addClass("mdl-menu__item mdl-js-ripple-effect")
            textContent = season?.let { "${it.year} ${it.month}" } ?: "All Seasons"
            onclick = {
                js("$('.mdl-menu__container')").removeClass("is-visible")
                onItemClick(season)
            }
            appendChild(document.createElement("span").apply {
                addClass("mdl-ripple")
            })
            js("componentHandler").upgradeElement(this)
        }
    }

    fun createMatchResult(wins: Int, loses: Int): Element {
        return document.createElement("th").apply {
            setAttribute("style", "text-align: center;")
            val matches = wins + loses
            val winRate = 100 * wins / matches
            if (resultAsWinRate) {
                textContent = "$winRate%".takeIf { matches > 0 } ?: "-"
            } else {
                textContent = "$wins/$loses".takeIf { matches > 0 } ?: "-"
            }
        }
    }

}