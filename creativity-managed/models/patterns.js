const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patternSchema = new Schema({
    name: {type: String, required: true},
    category: {type:String, required: true},
    patternNumber: {type: Number, required: true},
    brand: {type: String, required: true},
    sizes: String    
});

const Pattern = mongoose.model("Pattern", patternSchema);
module.exports = Pattern;