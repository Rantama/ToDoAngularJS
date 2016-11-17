/**
 * Created by cleverjam on 9/27/16.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var noteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }

});

var Note = mongoose.model("Note", noteSchema);

module.exports = Note;
