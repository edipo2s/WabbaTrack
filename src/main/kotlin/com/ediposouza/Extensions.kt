package com.ediposouza

import kotlin.js.Json

/**
 * Created by ediposouza on 28/04/17.
 */

@Suppress("UnsafeCastFromDynamic")
fun Json.toPairs(): List<Pair<String, Any?>> {
    val keys: Array<String> = js("Object").keys(this)
    return keys.map { it to get(it) }
}

fun Json.getString(key: String) = get(key).toString()

fun Json.getInt(key: String) = getString(key).toInt()

fun Json.getBoolean(key: String) = when (getString(key)) {
    "true" -> true
    else -> false
}