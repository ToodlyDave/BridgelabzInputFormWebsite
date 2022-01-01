window.addEventListener("DOMContentLoaded", () => {
    let nameElement = document.getElementById("name");
    let error = document.querySelector(".errorName");
    let emailElement = document.getElementById("email");
    let errorEmail = document.querySelector(".errorEmail");
    
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
});

function submitEmployee() {

}