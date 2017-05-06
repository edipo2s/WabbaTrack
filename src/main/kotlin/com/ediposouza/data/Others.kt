package com.ediposouza.data

import com.ediposouza.getString
import kotlin.js.Json

/**
 * Created by ediposouza on 05/05/17.
 */
data class User (

    val name: String,
    val photoUrl: String

) {

    companion object {

        fun parse(json: Json): User{
            return User(json.getString("name"), json.getString("photoUrl"))
        }

    }

}