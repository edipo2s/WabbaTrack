package com.ediposouza.data

/**
 * Created by Edipo on 19/03/2017.
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

enum class CardSet(val title: String) {

    CORE("Core"),
    MADHOUSE("Madhouse Collection"),
    FALLOFTHEDARKBROTHERHOOD("The Fall of the Dark Brotherhood"),
    TOKENS("Tokens"),
    UNKNOWN("Unknown");

    var unknownSetName = ""

    val db = name.toLowerCase()

    override fun toString(): String {
        return name.takeIf { this != UNKNOWN } ?: unknownSetName
    }

    companion object {

        fun of(value: String): CardSet {
            val name = value.trim().toUpperCase().replace(" ", "_")
            return if (values().map { it.name }.contains(name)) valueOf(name) else UNKNOWN
        }

    }

}

enum class CardRarity(val soulCost: Int) {

    COMMON(50),
    RARE(100),
    EPIC(400),
    LEGENDARY(1200),
    UNKNOWN(0);

    companion object {

        fun of(value: String): CardRarity {
            val name = value.trim().toUpperCase().replace(" ", "_")
            return if (values().map { it.name }.contains(name)) valueOf(name) else UNKNOWN
        }

    }

}

enum class CardType {

    ACTION,
    CREATURE,
    ITEM,
    SUPPORT,
    UNKNOWN;

    companion object {

        fun of(value: String): CardType {
            val name = value.trim().toUpperCase().replace(" ", "_")
            return if (values().map { it.name }.contains(name)) valueOf(name) else UNKNOWN
        }

    }

}

enum class CardRace(val desc: String) {

    ARGONIAN("The Argonians of Black Marsh are possessed of a cool intellect and are well-versed in " +
            "stealth and the use of blades. They often act as the scouts and skirmishers."),
    BRETON("Flamboyant, intelligent, and resourceful, the Bretons of High Rock are renowned craftsmen, " +
            "shrewd merchants, gallant cavaliers, and inventive wizards."),
    DARK_ELF("The Dark Elf homeland of Morrowind has been invaded many times over the millennia. " +
            "This history of conflict has transformed the Dunmer into hardened warriors."),
    HIGH_ELF("The Altmer are one of the longest-lived and most-intelligent races in Tamriel, " +
            "which grants them a natural affinity for spells and magic."),
    IMPERIAL("The Imperial natives of Cyrodiil have proven to be shrewd tacticians and diplomats."),
    KHAJIIT("Khajiit are quick and agile, making them some of the most adept thieves in Tamriel."),
    NORD("Hailing from the inhospitable mountains of Skyrim, Nords are fearsome and hardy warriors."),
    ORC("The Orcs of the Wrothgarian and Dragontail Mountains are renowed as both craftsmen and berserkers."),
    REDGUARD("The Redguard of Hammerfell are Tamriel's most talented and resourceful warriors."),
    WOOD_ELF("The clanfolk of the Valenwood are the finest archers in Tamriel. Wood Elves excel at " +
            "hunting and dispatching the unwary."),
    ASH_CREATURE(""),
    BEAST(""),
    CENTAUR(""),
    CHAURUS(""),
    DAEDRA(""),
    DEFENSE(""),
    DRAGON(""),
    DREUGH(""),
    DWEMER(""),
    FISH(""),
    GIANT(""),
    GOBLIN(""),
    HARPY(""),
    IMP(""),
    KWAMA(""),
    LURCHER(""),
    LYCANTHROPE(""),
    MAMMOTH(""),
    MANTIKORA(""),
    MINOTAUR(""),
    MUDCRAB(""),
    MUMMY(""),
    NEREID(""),
    OGRE(""),
    REPTILE(""),
    REACHMAN(""),
    SKELETON(""),
    SPIRIT(""),
    SPIDER(""),
    SPRIGGAN(""),
    TROLL(""),
    VAMPIRE(""),
    WOLF(""),
    WAMASU(""),
    WRAITH(""),
    UNKNOWN(""),
    NONE("");

    companion object {

        fun of(value: String): CardRace {
            val name = value.trim().toUpperCase().replace(" ", "_")
            return if (value.trim().isEmpty()) NONE else
                if (values().map { it.name }.contains(name)) valueOf(name) else UNKNOWN
        }

    }
}

enum class CardKeyword {

    ACTIVATE,
    BREAKTHROUGH,
    CHARGE,
    COVER,
    DRAIN,
    EVOLVES,
    GUARD,
    LAST_GASP,
    LETHAL,
    PILFER,
    PROPHECY,
    REGENERATE,
    SHACKLE,
    SILENCE,
    SUMMON,
    WARD,
    UNKNOWN;

    companion object {

        fun of(value: String): CardKeyword {
            val name = value.trim().toUpperCase().replace(" ", "_")
            return if (values().map { it.name }.contains(name)) valueOf(name) else UNKNOWN
        }

    }
}

enum class CardArenaTier(val value: Int = 0) {

    TERRIBLE(10),
    POOR(20),
    AVERAGE(30),
    GOOD(50),
    EXCELLENT(70),
    INSANE(90),
    UNKNOWN(),
    NONE();

    companion object {

        fun of(value: String): CardArenaTier {
            val name = value.trim().toUpperCase().replace(" ", "_")
            return if (values().map { it.name }.contains(name)) valueOf(name) else UNKNOWN
        }

    }

}

data class CardArenaTierPlus(

        val type: CardArenaTierPlusType,
        val operator: CardArenaTierPlusOperator?,
        val value: String

)

enum class CardArenaTierPlusOperator {

    EQUALS,
    GREAT,
    MINOR,
    UNKNOWN;

    companion object {

        fun of(value: String): CardArenaTierPlusOperator {
            return when (value) {
                "=" -> EQUALS
                ">" -> GREAT
                "<" -> MINOR
                else -> UNKNOWN
            }
        }

    }

}

enum class CardArenaTierPlusType(val extraPoints: Int = 5) {

    ATTACK(),
    ATTR(2),
    COST(),
    HEALTH(),
    KEYWORD(),
    RACE(),
    STRATEGY(),
    TEXT(),
    TYPE(),
    UNKNOWN();

    companion object {

        fun of(value: String): CardArenaTierPlusType {
            val name = value.trim().toUpperCase().replace(" ", "_")
            return if (values().map { it.name }.contains(name)) valueOf(name) else UNKNOWN
        }

    }

}

data class CardMissing(

        val shortName: String,
        val rarity: CardRarity,
        val qtd: Int

)

data class CardStatistic(

        val shortName: String,
        val rarity: CardRarity,
        val unique: Boolean

)

data class CardBasicInfo(

        val shortName: String,
        val set: String,
        val attr: String
)

data class CardSlot(

        val card: Card,
        val qtd: Int,
        var currentQtd: Int = qtd,
        var recentChanged: Boolean = false

)

data class CardPick(

        val card: Card,
        val value: Int,
        val synergy: List<Card>

) {

    fun withoutSynergyList() = CardPick(card, value, listOf())

}

data class Card(

        val name: String,
        val shortName: String,
        val set: CardSet,
        val attr: CardAttribute,
        val dualAttr1: CardAttribute,
        val dualAttr2: CardAttribute,
        val rarity: CardRarity,
        val unique: Boolean,
        val cost: Int,
        val attack: Int,
        val health: Int,
        val type: CardType,
        val race: CardRace,
        val keywords: List<CardKeyword>,
        val text: String,
        val arenaTier: CardArenaTier,
        val arenaTierPlus: CardArenaTierPlus?,
        val evolves: Boolean,
        val season: String

){
    companion object {

        val DUMMY = Card("Unknown", "", CardSet.UNKNOWN, CardAttribute.AGILITY, CardAttribute.AGILITY, CardAttribute.AGILITY,
                CardRarity.COMMON, false, 0, 0, 0, CardType.UNKNOWN, CardRace.ARGONIAN, listOf(), "", CardArenaTier.NONE,
                null, false, "")

    }
}