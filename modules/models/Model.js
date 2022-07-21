const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const ModelSchema = new mongoose.Schema({
    type:{
        type:String,
        required:true,
        default:"saina",
    },
});

ModelSchema.plugin(uniqueValidator);
module.exports=mongoose.model("Model",ModelSchema);