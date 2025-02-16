const {model}=require("mongoose");

const {HoldingsSchema}= require("../schemas/HoldingsSchema");

const HoldingsModel=new model("holdiing",HoldingsSchema);

module.exports={HoldingsModel};
