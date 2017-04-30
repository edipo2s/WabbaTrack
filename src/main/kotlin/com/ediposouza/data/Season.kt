package com.ediposouza.data

/**
 * Created by Edipo on 30/04/2017.
 */
enum class Month {

    JANUARY,
    FEBRUARY,
    MARCH,
    APRIL,
    MAY,
    JUNE,
    JULY,
    AUGUST,
    SEPTEMBER,
    OCTOBER,
    NOVEMBER,
    DECEMBER

}

data class Season(val id: String) {

    val year by lazy { id.substringBefore("_") }

    val month by lazy {
        val monthIndex = id.substringAfter("_").toInt() - 1
        Month.values()[monthIndex].name.toLowerCase().capitalize()
    }

}