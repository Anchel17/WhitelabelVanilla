var checkboxElement = document.getElementById("checkbox");
var disableCheckboxBtnElement = document.getElementById("disable-checkbox-btn");
var errorCheckboxBtnElement = document.getElementById("error-checkbox-btn");

disableCheckboxBtnElement.addEventListener("click", 
    (event) => {
        checkboxElement.disabled = !checkboxElement.disabled
    }
)