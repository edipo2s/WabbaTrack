package com.ediposouza

/**
 * Created by ediposouza on 27/04/17.
 */
enum class CardAttribute {

    STRENGTH,
    INTELLIGENCE,
    WILLPOWER,
    AGILITY,
    ENDURANCE,
    NEUTRAL,
    DUAL

}

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