function registerClick() {
    userObj = {
        userName: usernameinput.value,
        accountNumber: accnoinput.value,
        password: pswdinput.value,
        balance: 0.00
    };
    if (userObj.userName == "" || userObj.accountNumber == "" || userObj.password == "")
        alert("Please enter the full details.");
    else {
        if (userObj.accountNumber in localStorage)
            alert("User account number already exists.");
        else {
            localStorage.setItem(userObj.accountNumber, JSON.stringify(userObj));
            alert("User details are added successfully.");
        }
    }
}

function signInClick() {
    window.location = "./login.html"
}