const mongoose = require('mongoose');

const depositSchema = new mongoose.Schema({
    accountnumber: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Deposit = mongoose.model('Deposit', depositSchema);
module.exports = Deposit;
