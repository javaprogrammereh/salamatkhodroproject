const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {type: String},
    userRef: {type: mongoose.Schema.Types.ObjectId, ref: 'User', null: true},
    provider: {type: String},
    username: {type: String, unique: true, required: true, trim: true},
    mobile: {type: String, unique: true, required: true, trim: true},
    contact: {type: String},
    email: {type: String, required: true, unique: true, trim: true},
    password: {type: String, required: true},
    role: {
        type: String, default: 'basic',
        // enum: ["basic", "supervisor", "admin"]
    },
    credit: {type: Number},
    accessToken: {type: String},
    active: {type: Boolean},
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
    transaction: [
        {
            payFor: {type: String},
            before: {type: Number},
            pay: {type: Number},
            use: {type: Number},
            after: {type: Number},
            created: {type: Date}
        }
    ],
});
UserSchema.plugin(uniqueValidator);
module.exports=mongoose.model("User",UserSchema);