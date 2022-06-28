const mongoose = require("mongoose")

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        firstname: String,
        secondname: String,
        email: String,
        password: String,
        gender : String,
        genderPref: String,
        _online: Boolean,
        _available: Boolean,
        _active: Boolean
    })
)

module.exports = User