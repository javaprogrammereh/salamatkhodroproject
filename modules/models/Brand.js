const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const brandSchema = new mongoose.Schema({
    type:{
        type:String,
        required:true,
        default:"sipa",
    },
});

brandSchema.plugin(uniqueValidator);
module.exports=mongoose.model("brand",brandSchema);
//