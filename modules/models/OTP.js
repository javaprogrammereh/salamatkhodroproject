const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const OtpSchema = new Schema({
    number: {
        type: String,
        require: true
    },
    otp: {
        type: String,
        require: true
    },
    // accessToken: {type: String},
    createAt: {type: Date, default: Date.now(), index: {expire: 300}}

    // After 5 minutes it deleted automatically from the database
}, { timestamps: true});

module.exports=mongoose.model("OTP",OtpSchema);