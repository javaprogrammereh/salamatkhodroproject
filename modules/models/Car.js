const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

//*Car
const CarSchema = new Schema({
    faName: {type: String, required: true, trim: true},
    enName: {type: String, required: true, trim: true},
    slug: {type: String, required: true, trim: true},
    logo: {type: String, trim: true},
    description: {type: String, trim: true},
    brands: [{ type: Schema.Types.ObjectId, ref: "Brand" }],
    model:[{ type: Schema.Types.ObjectId, ref: "Model" }],
    style:[{ type: Schema.Types.ObjectId, ref: "Style" }],
    type:[{ type: Schema.Types.ObjectId, ref: "Type" }]
});
CarSchema.plugin(uniqueValidator);
module.exports=mongoose.model("Car",CarSchema);