package com.ediposouza.model

import com.ediposouza.data.CardAttribute
import kotlin.js.Date

/**
 * Created by Edipo on 29/03/2017.
 */

enum class DeckClass(val attr1: CardAttribute, val attr2: CardAttribute = CardAttribute.NEUTRAL) {

    ARCHER(CardAttribute.STRENGTH, CardAttribute.AGILITY),
    ASSASSIN(CardAttribute.INTELLIGENCE, CardAttribute.AGILITY),
    BATTLEMAGE(CardAttribute.STRENGTH, CardAttribute.INTELLIGENCE),
    CRUSADER(CardAttribute.STRENGTH, CardAttribute.WILLPOWER),
    MAGE(CardAttribute.INTELLIGENCE, CardAttribute.WILLPOWER),
    MONK(CardAttribute.WILLPOWER, CardAttribute.AGILITY),
    SCOUT(CardAttribute.AGILITY, CardAttribute.ENDURANCE),
    SORCERER(CardAttribute.INTELLIGENCE, CardAttribute.ENDURANCE),
    SPELLSWORD(CardAttribute.WILLPOWER, CardAttribute.ENDURANCE),
    WARRIOR(CardAttribute.STRENGTH, CardAttribute.ENDURANCE),
    STRENGTH(CardAttribute.STRENGTH),
    INTELLIGENCE(CardAttribute.INTELLIGENCE),
    AGILITY(CardAttribute.AGILITY),
    WILLPOWER(CardAttribute.WILLPOWER),
    ENDURANCE(CardAttribute.ENDURANCE),
    NEUTRAL(CardAttribute.NEUTRAL);

}

enum class DeckType {

    AGGRO,
    ARENA,
    COMBO,
    CONTROL,
    MIDRANGE,
    OTHER;

    companion object {

        fun of(value: String): DeckType {
            val name = value.toUpperCase()
            return OTHER.takeUnless { values().map { it.name }.contains(name) } ?: valueOf(name)
        }

    }
}

data class DeckUpdate(

        val date: Date,
        val changes: Map<String, Int>

)

data class DeckComment(

        val uuid: String,
        val owner: String,
        val comment: String,
        val date: Date

)

data class Deck(

        val uuid: String,
        val name: String,
        val owner: String,
        val private: Boolean,
        val type: DeckType,
        val cls: DeckClass,
        val cost: Int,
        val createdAt: Date,
        val updatedAt: Date,
        val patch: String,
        val likes: List<String>,
        val views: Int,
        val cards: Map<String, Int>,
        val updates: List<DeckUpdate>,
        val comments: List<DeckComment>

) {

    companion object {

        val DUMMY = Deck("", "", "", false, DeckType.OTHER, DeckClass.NEUTRAL, 0, Date(),
                Date(), "", listOf(), 0, mapOf(), listOf(), listOf())
    }

    override fun toString(): String {
        return "Deck(id='$uuid', name='$name', owner='$owner', private=$private, type=$type, cls=$cls, cost=$cost, " +
                "createdAt=$createdAt, updatedAt=$updatedAt, patch='$patch', likes=$likes, views=$views, cards=$cards, " +
                "updates=$updates, comments=$comments)"
    }

}