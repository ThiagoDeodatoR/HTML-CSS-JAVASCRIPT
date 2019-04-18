"use strict";

const $formZerfilos = document.querySelector(".form-zerfilos");
const $label = $formZerfilos.querySelector(".label");
const $inputTxt = $formZerfilos.querySelector(".inputTxt");
const $checkBoxes = $formZerfilos.querySelector(".checkBoxes");

const newTag = value => {
    const $tag = document.createElement("span");
    const template = `
            <input class="inputBox" id="${value}" type="checkbox" checked>
            <label class="labelBox" for="${value}">${value}</label>
            <span class="remove">X</span>`;
    
    $tag.classList.add("wraper");
    $tag.innerHTML = template;

    return $tag;
}

$inputTxt.addEventListener("focus", focusAndBlur);
$inputTxt.addEventListener("blur", focusAndBlur);

function focusAndBlur() {
    $label.classList.toggle("-focus");
}

$formZerfilos.addEventListener('submit', event => event.preventDefault()); 

$inputTxt.addEventListener("keyup", event => {

    if(event.key.toUpperCase() === "ENTER" || event.keyCode === 13){ // 13 sendo Enter em numérico
        const value = $inputTxt.value;
        if(value != ""){
            $checkBoxes.appendChild(newTag(value));

            $inputTxt.value = "";
        }
    }
});

$checkBoxes.addEventListener("click" , event => {
    const {target} = event;

    if (target.classList.contains("remove")) {
        const removeWraper = target.closest(".wraper");

        removeWraper.classList.add("-remove");
        removeWraper.addEventListener("transitionend" , () => removeWraper.remove());
    }
});

$checkBoxes.addEventListener("change" , event => {
    const {target} = event;

    if (target.classList.contains("inputBox")) {
        const $wraper = target.closest(".wraper");

        if(target.checked) {
            $wraper.classList.remove("-vibrationOut");
            $wraper.classList.add("-vibrationIn");
        }
        else {
            $wraper.classList.remove("-vibrationIn");
            $wraper.classList.add("-vibrationOut");
        }
    }
});
