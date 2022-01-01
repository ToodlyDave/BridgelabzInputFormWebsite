window.addEventListener("DOMContentLoaded", () => {
    let nameElement = document.getElementById("name");
    let error = document.querySelector(".error");
    
    nameElement.addEventListener("input", () => {
            if(nameElement.value.length == 0) {
                error.textContent = "Please enter a vlalue";
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
});

function submitEmployee() {

}