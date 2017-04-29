package com.ediposouza.data

import com.ediposouza.getBoolean
import com.ediposouza.getInt
import com.ediposouza.getString
import com.ediposouza.model.DeckClass
import com.ediposouza.model.DeckType
import kotlin.js.Json

/**
 * Created by ediposouza on 25/01/17.
 */
enum class MatchMode {

    RANKED,
    CASUAL,
    ARENA,
    PRATICE

}

data class MatchDeck(

        val name: String? = null,
        val cls: DeckClass,
        val type: DeckType,
        val deck: String? = null,
        val version: String? = null

)

data class Match(

        val uuid: String,
        val first: Boolean,
        val player: MatchDeck,
        val opponent: MatchDeck,
        val mode: MatchMode,
        val season: String,
        val rank: Int,
        val legend: Boolean,
        val win: Boolean

) {
    companion object {

        @Suppress("UNCHECKED_CAST_TO_NATIVE_INTERFACE")
        fun parse(id: String, json: Json): Match{
            val playerJson = json["player"] as Json
            val opponentJson = json["opponent"] as Json
            val player = MatchDeck(
                    playerJson.getString("name"),
                    DeckClass.values()[playerJson.getInt("cls")],
                    DeckType.values()[playerJson.getInt("type")],
                    playerJson.getString("deck"),
                    playerJson.getString("version")
            )
            val opponent = MatchDeck(
                    cls = DeckClass.values()[opponentJson.getInt("cls")],
                    type = DeckType.values()[opponentJson.getInt("type")]
            )
            return Match(id, json.getBoolean("first"), player, opponent, MatchMode.values()[json.getInt("mode")],
                    json.getString("season"), json.getInt("rank"), json.getBoolean("legend"), json.getBoolean("win"))
        }

    }
}