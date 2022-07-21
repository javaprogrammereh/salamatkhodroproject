const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const TypeSchema = new mongoose.Schema({
    type:{
        type:String,
        required:true,
        default:"personal",
    },
});

TypeSchema.plugin(uniqueValidator);
module.exports=mongoose.model("Type",TypeSchema);