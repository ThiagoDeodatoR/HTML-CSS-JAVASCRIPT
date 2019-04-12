"use strict";

const $formZerfilos = document.querySelector(".form-zerfilos");
const $label = $formZerfilos.querySelector(".label");
const $inputTxt = $formZerfilos.querySelector(".inputTxt");

$inputTxt.addEventListener("focus", focusAndBlur);
$inputTxt.addEventListener("blur", focusAndBlur);

function focusAndBlur() {
    $label.classList.toggle("-focus");
}

