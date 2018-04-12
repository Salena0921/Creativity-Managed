const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patternSchema = new Schema({
    patternname: {type: String, required: true},
    patterncategory: {type:String, required: true},
    patternnumber: {type: Number, required: true},
    patternbrand: {type: String, required: true},
    patternsizes: String ,
    // status: { type: String, default: "in-stock"}   
});

const Pattern = mongoose.model("Pattern", patternSchema);
module.exports = Pattern;