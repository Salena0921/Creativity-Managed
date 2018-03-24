const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const designSchema = new Schema({
    title: {type:String, required: true},
    concept: String,
    description: {type: String, required: true}    
});

const Design = mongoose.model("Design", designSchema);
module.exports = Design;