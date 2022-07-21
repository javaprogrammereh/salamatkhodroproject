const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const StyleSchema = new mongoose.Schema({
    type:{
        type:String,
        required:true,
        default:"A",
    },
});

StyleSchema.plugin(uniqueValidator);
module.exports=mongoose.model("Style",StyleSchema);