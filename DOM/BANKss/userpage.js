activeUser = JSON.parse(localStorage.getItem("activeUserAccount"));
activeAcno = activeUser.activeUserAccount;
welcomemsg.innerHTML = `Welcome User ${activeAcno}`;
userObj = JSON.parse(localStorage.getItem(activeAcno));
depositresultdisplay.innerHTML = `Your Current Balance : Rs. ${userObj.balance}`

function depositClick() {
    if (amountinput1.value == "" || pswdinput1.value == "")
        alert("Please enter the full details.");
    else if (userObj.password != pswdinput1.value)
        alert("Please enter the correct password.");
    else if (Number(amountinput1.value) > 0) {
        userObj.balance = Number(userObj.balance) + Number(amountinput1.value);
        localStorage.setItem(userObj.accountNumber, JSON.stringify(userObj));
        depositresultdisplay.innerHTML = `Your Current Balance : Rs. ${userObj.balance}`
        alert("Amount has been deposited.");
    }
    else
        alert("Please enter a valid deposit amount.");
}

function withdrawClick() {
    if (amountinput2.value == "" || pswdinput2.value == "")
        alert("Please enter the full details.");
    else if (userObj.password != pswdinput2.value)
        alert("Please enter the correct password.");
    else if (Number(amountinput2.value) > 0) {
        if (Number(amountinput2.value) <= Number(userObj.balance)) {
            userObj.balance = Number(userObj.balance) - Number(amountinput2.value);
            localStorage.setItem(userObj.accountNumber, JSON.stringify(userObj));
            depositresultdisplay.innerHTML = `Your Current Balance : Rs. ${userObj.balance}`
            alert("Amount has been withdrawn.");
        }
        else
            alert("Withdraw amount is more than available balance.");
    }
    else
        alert("Please enter a valid withdraw amount.");
}

function homeClick(){
    window.location = "./index.html"
}