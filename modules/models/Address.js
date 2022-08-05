const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const addressSchema = new mongoose.Schema({
    address: [
        {
            city: {type: String},
            area: {type: String},
            address: {type: String},
            tittle: {type: String},
            lng: {type: Number, trim: true},
            lat: {type: Number, trim: true}
        }
    ],
});
addressSchema.plugin(uniqueValidator);
module.exports=mongoose.model("address",addressSchema);