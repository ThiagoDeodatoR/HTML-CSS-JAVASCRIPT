"use strict";

const $formZerfilos = document.querySelector(".form-zerfilos");
const $label = $formZerfilos.querySelector(".label");
const $inputTxt = $formZerfilos.querySelector(".inputTxt");
const $checkBoxes = $formZerfilos.querySelector(".checkBoxes");

const newTag = value => {
    const $tag = document.createElement("span");
    const template = `
            <input class="inputBox" id="${value}" type="checkbox" checked>
            <label class="labelBox" for="${value}">${value}</label>`;
    
    $tag.innerHTML = template;

    return $tag;
}

$inputTxt.addEventListener("focus", focusAndBlur);
$inputTxt.addEventListener("blur", focusAndBlur);

function focusAndBlur() {
    $label.classList.toggle("-focus");
}

$formZerfilos.addEventListener('submit', event => event.preventDefault() ); 

$inputTxt.addEventListener("keyup", event => {

    if(event.key.toUpperCase() === "ENTER" || event.keyCode === 13){ // 13 sendo Enter em numérico
        const value = $inputTxt.value;
        $checkBoxes.appendChild(newTag(value));

        $inputTxt.value = "";
    }
});
