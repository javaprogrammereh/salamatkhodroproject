const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
const RoleSchema = new Schema({
    role: {type: String, required: true, unique: true, trim: true},
    userRef: {type: mongoose.Schema.Types.ObjectId, ref: 'user', null: true},
    extend: [{type: String}],
    permissions: [{
        resource: {type: String, required: true},
        action: {type: String, required: true},
        attributes: {type: String, default: '*'},
    }],
});
RoleSchema.plugin(uniqueValidator);
module.exports=mongoose.model("Role",RoleSchema);