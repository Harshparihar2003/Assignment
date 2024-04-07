const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique :true
    },
    age : {
        type : Number,
        required : true,
    },
    DOB : {
        type : Date,
        default : Date.now()
    },
    location : {
        type : String,
        required : true
    },
})

module.exports = mongoose.model("User", userSchema);