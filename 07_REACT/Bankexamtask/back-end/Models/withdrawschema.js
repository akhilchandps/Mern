const mongoose = require('mongoose');

const withdrawSchema = new mongoose.Schema({
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

const Withdraw = mongoose.model('Withdraw', withdrawSchema);
module.exports = Withdraw;
