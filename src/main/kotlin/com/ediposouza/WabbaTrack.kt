package com.ediposouza

import kotlin.browser.document
import kotlin.dom.addClass
import kotlin.dom.appendText

fun Main() {
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