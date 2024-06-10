import { useState } from "react";
import { depositAPI, withdrawAPI } from "../Services/AllAPi";

function DepositWithdraw({ action }) {
    const [transactionData, setTransactionData] = useState({
        accountnumber: "",
        amount: ""
    });

    const handleTransaction = async () => {
        if (!transactionData.accountnumber || !transactionData.amount) {
            alert("Please fill in all fields");
            return;
        }

        let result;
        if (action === "deposit") {
            result = await depositAPI(transactionData);
        } else {
            result = await withdrawAPI(transactionData);
        }

        if (result.status === 200) {
            alert(`${action} successful`);
        } else {
            alert(`${action} failed: ${result.response.data}`);
        }
    };

    return (
        <div className="container">
            <h3>{action.toUpperCase()}</h3>
            <form>
                <input type="text" className="form-control my-3" onChange={e => setTransactionData({ ...transactionData, accountnumber: e.target.value })} placeholder="Account Number" />
                <input type="number" className="form-control my-3" onChange={e => setTransactionData({ ...transactionData, amount: e.target.value })} placeholder="Amount" />
            </form>
            <button className="btn btn-primary" onClick={handleTransaction}>{action.toUpperCase()}</button>
        </div>
    );
}

export default DepositWithdraw;
