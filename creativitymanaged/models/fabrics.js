const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fabricSchema = new Schema({
    fabricname: {type:String, required: true},
    fabrictype: {type:String, required: true},
    fabricyardage: {type: Number, required: true},
    fabricwashing: String,    
});

const Fabric = mongoose.model("Fabric", fabricSchema);
module.exports = Fabric;