var checkboxElement = document.getElementById("checkbox");
var radiobuttonElement1 = document.getElementById("radiobutton1");
var radiobuttonElement2 = document.getElementById("radiobutton2");
var toggleElement = document.getElementById("toggle");
var sliderSpanElement = document.getElementById("slider-span");
var disableCheckboxBtnElement = document.getElementById("disable-checkbox-btn");
var disableRadiobuttonElement = document.getElementById("disable-radiobutton-btn");
var disableToggleElement = document.getElementById("disable-toggle-btn");

disableCheckboxBtnElement.addEventListener("click", 
    (event) => {
        checkboxElement.disabled = !checkboxElement.disabled

        if(checkboxElement.disabled){
            checkboxElement.classList.add('disabled');
            disableCheckboxBtnElement.textContent = 'Habilitar';
        }
        else{
            checkboxElement.classList.remove('disabled');
            disableCheckboxBtnElement.textContent = 'Desabilitar';
        }
    }
)

disableRadiobuttonElement.addEventListener("click", 
    (event) => {
        radiobuttonElement1.disabled = !radiobuttonElement1.disabled;
        radiobuttonElement2.disabled = !radiobuttonElement2.disabled;

        if(radiobuttonElement1.disabled){
            radiobuttonElement1.classList.add('disabled');
            radiobuttonElement2.classList.add('disabled');
            disableRadiobuttonElement.textContent = 'Habilitar';
        }
        else{
            radiobuttonElement1.classList.remove('disabled');
            radiobuttonElement2.classList.remove('disabled');
            disableRadiobuttonElement.textContent = 'Desabilitar';
        }
    }
)

disableToggleElement.addEventListener("click", 
    (event) => {
        toggleElement.disabled = !toggleElement.disabled;

        if(toggleElement.disabled){
            toggleElement.classList.add('disabled');
            sliderSpanElement.classList.add('disabled');
            disableToggleElement.textContent = 'Habilitar'
        }
        else{
            toggleElement.classList.remove('disabled');
            sliderSpanElement.classList.remove('disabled');
            disableToggleElement.textContent = 'Desabilitar'
        }
    }
)