//Build Mongoose Schema here
const mongoose = require('mongoose');

const WordSchema = mongoose.Schema({
    kor : {
        type : String,
        required : true
    },
    eng : {
        type : String
    },
    wordType : {
        type : String,
        required : true
    },
    date : {
        type: Date,
        default : Date.now

    },
});

module.exports = mongoose.model('wordModel',WordSchema);