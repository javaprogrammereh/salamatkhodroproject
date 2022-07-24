const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const TransactionSchema = new mongoose.Schema({
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
TransactionSchema.plugin(uniqueValidator);
module.exports=mongoose.model("Transaction",TransactionSchema);