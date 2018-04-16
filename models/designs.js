const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const designSchema = new Schema({
    designname: {type:String, required: true},
    designconcept: String,
    designdescription: {type: String, required: true},
    designstatus: String    
});

const Design = mongoose.model("Design", designSchema);
module.exports = Design;