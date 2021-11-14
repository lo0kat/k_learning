//Build Mongoose Schema here
import { Schema, model } from 'mongoose';

const WordSchema = Schema({
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

export default model('wordModel',WordSchema);