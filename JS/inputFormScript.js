window.addEventListener("DOMContentLoaded", () => {
    let nameElement = document.getElementById("name");
    let error = document.querySelector(".errorName");

    let emailElement = document.getElementById("email");
    let errorEmail = document.querySelector(".errorEmail");

    let phone = document.getElementById("phone");
    let errorPhone = document.querySelector(".errorPhone");

    let pwd = document.getElementById("password");
    let errorPwd = document.querySelector(".errorPwd");
    
    nameElement.addEventListener("input", () => {
            if(nameElement.value.length == 0) {
                error.textContent = "Please enter a value";
                return;
            }
            else{
                try {
                (new Employee()).name = nameElement.value;
                error.textContent = "";
            } catch (ee) {
                error.textContent = "Invalid Name";
            }
        }
    });    
    emailElement.addEventListener("input", () => {
            if(emailElement.value.length == 0) {
                errorEmail.textContent = "Please enter a value";
                return;
            }
            else{
                try {
                (new Employee()).email = emailElement.value;
                errorEmail.textContent = "";
            } catch (ee) {
                errorEmail.textContent = "Invalid Email id";
            }
        }
    });    
    phone.addEventListener("input", () => {
            if(phone.value.length == 0) {
                errorPhone.textContent = "Please enter a value";
                return;
            }
            else{
                try {
                (new Employee()).phone = phone.value;
                errorPhone.textContent = "";
            } catch (ee) {
                errorPhone.textContent = "Invalid phone number";
            }
        }
    });    
    pwd.addEventListener("input", () => {
            if(pwd.value.length == 0) {
                errorPwd.textContent = "Please enter a value";
                return;
            }
            else{
                try {
                (new Employee()).password = pwd.value;
                errorPwd.textContent = "";
            } catch (ee) {
                errorPwd.textContent = "Invalid password";
            }
        }
    });    
});

function submitEmployee() {

}