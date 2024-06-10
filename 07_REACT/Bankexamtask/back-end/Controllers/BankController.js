const User = require('../Models/userModel');
const Deposit = require('../Models/depositModel');
const Withdraw = require('../Models/withdrawModel');

// Register and login methods remain the same

exports.deposit = async (req, res) => {
    const { accountnumber, amount } = req.body;

    try {
        const user = await User.findOne({ accountnumber });
        if (!user) {
            return res.status(404).json("Account not found");
        }
        user.balance += amount;
        await user.save();

        const deposit = new Deposit({ accountnumber, amount });
        await deposit.save();

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json("Deposit failed: " + error);
    }
};

exports.withdraw = async (req, res) => {
    const { accountnumber, amount } = req.body;

    try {
        const user = await User.findOne({ accountnumber });
        if (!user) {
            return res.status(404).json("Account not found");
        }
        if (user.balance < amount) {
            return res.status(400).json("Insufficient balance");
        }
        user.balance -= amount;
        await user.save();

        const withdraw = new Withdraw({ accountnumber, amount });
        await withdraw.save();

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json("Withdrawal failed: " + error);
    }
};
