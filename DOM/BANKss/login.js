function loginClick() {
    if (accnoinput.value == "" || pswdinput.value == "")
        alert("Please enter the full details.");
    else {
        userObj = JSON.parse(localStorage.getItem(accnoinput.value));
        if (userObj != null)
            if (userObj.password == pswdinput.value && userObj.accountNumber == accnoinput.value) {
                activeUserAcno = {
                    activeUserAccount: accnoinput.value
                };
                localStorage.setItem("activeUserAccount", JSON.stringify(activeUserAcno));
                alert("Login Successful.");
                window.location = "./userpage.html"
            }
            else
                alert("Incorrect password.");
        else
            alert("No such user account.");
    }
}

function signUpClick() {
    window.location = "./register.html"
}

function forgetPasswordClick() {
    userObj = JSON.parse(localStorage.getItem(accnoinput.value));
    if (accnoinput.value == "")
        alert("Please enter the account number.");
    else if (userObj != null) {
        newPswd = prompt("Please enter your new password.");
        userObj.password = newPswd;
        localStorage.setItem(userObj.accountNumber, JSON.stringify(userObj));
        alert("Password has been changed.")
    }
    else
        alert("Invalid account number.");
}