function validatePassword() {
    const psw = document.querySelector("#password").value; 
    const conPsw = document.querySelector("#confirm_password").value;
    if (conPsw != psw) {
        conPsw.setCustomValidity("Passwords do not match")
    } else conPsw.setCustomValidity("");
    conPsw.reportValidity();
}

let conPsw = document.querySelector("#confirm_password")
conPsw.addEventListener("onkeydown", () => {
    validatePassword();
})