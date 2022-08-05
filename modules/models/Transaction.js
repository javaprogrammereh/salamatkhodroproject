const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const transactionSchema = new mongoose.Schema({
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
transactionSchema.plugin(uniqueValidator);
module.exports=mongoose.model("transaction",transactionSchema);