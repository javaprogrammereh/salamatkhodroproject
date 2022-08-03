const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const BrandSchema = new mongoose.Schema({
    type:{
        type:String,
        required:true,
        default:"sipa",
    },
});

BrandSchema.plugin(uniqueValidator);
module.exports=mongoose.model("Brand",BrandSchema);
//