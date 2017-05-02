package com.ediposouza

import com.ediposouza.model.DeckClass
import org.w3c.dom.Element
import org.w3c.dom.HTMLCollection
import kotlin.browser.document
import kotlin.dom.addClass
import kotlin.js.Json

/**
 * Created by ediposouza on 28/04/17.
 */
fun Element.addDeckClassIcons(cls: DeckClass) {
    appendChild(document.createElement("img").apply {
        addClass("wt-attr")
        setAttribute("src", "images/Attribute/${cls.attr1.name.toLowerCase().capitalize()}.png")
    })
    appendChild(document.createElement("img").apply {
        addClass("wt-attr")
        setAttribute("src", "images/Attribute/${cls.attr2.name.toLowerCase().capitalize()}.png")
    })
}

fun Element.removeAllChilds(){
    while (childElementCount > 0) {
        lastChild?.let {
            removeChild(it)
        }
    }
}

fun HTMLCollection.foreach(action: (Element?) -> Unit): Unit {
    for (i in 0..length) action(item(i))
}

fun Json.getString(key: String) = get(key).toString()

fun Json.getInt(key: String) = getString(key).toInt()

fun Json.getBoolean(key: String) = when (getString(key)) {
    "true" -> true
    else -> false
}