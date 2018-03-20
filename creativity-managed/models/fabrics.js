const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fabricSchema = new Schema({
    category: {type:String, required: true},
    yardage: {type: Number, required: true},
    description: String,    
});

const Fabric = mongoose.model("Fabric", fabricSchema);
module.exports = Fabric;