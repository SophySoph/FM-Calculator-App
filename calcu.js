const textArea = document.getElementById("text-area");

let typedNumberArray = [];
let typedNumberString = "";
let additionReservedNumber = 0;
let substractionReservedNumber = 0;
let divisionReservedNumber = 0;
let multiplicationReservedNumber = 0;
let resultReservedNumber = 0;
let resultNumber = 0; 


function resultClicked(){
    if(typedNumberString != 0){ 
        resultReservedNumber = parseFloat(typedNumberString.replace(",",".")); // To have "." instead of "," in the calcul
    }else{
        return undefined; // to ignore the "more than one click" 
    }

    // addition
    if(additionReservedNumber != 0){
        resultNumber = additionReservedNumber + resultReservedNumber;
        let pointTovirgule = "" + resultNumber;
        textArea.innerHTML = pointTovirgule.replace(".",",");
    }
    // substraction
    else if(substractionReservedNumber != 0){
        resultNumber = substractionReservedNumber - resultReservedNumber;
        let pointTovirgule = "" + resultNumber;
        textArea.innerHTML = pointTovirgule.replace(".",",");
    }
    // division
    else if(divisionReservedNumber != 0){
        resultNumber = divisionReservedNumber / resultReservedNumber;
        let pointTovirgule = "" + resultNumber;
        textArea.innerHTML = pointTovirgule.replace(".",",");
    }
    // multiplication
    else if(multiplicationReservedNumber != 0){
        resultNumber = multiplicationReservedNumber * resultReservedNumber;
        let pointTovirgule = "" + resultNumber;
        textArea.innerHTML = pointTovirgule.replace(".",",");
    }
    
    typedNumberArray = [];
    typedNumberString = "";
    additionReservedNumber = 0;
    substractionReservedNumber = 0;
    divisionReservedNumber = 0;
    multiplicationReservedNumber = 0;
    resultReservedNumber = 0;
};

function deleteClicked(){
    typedNumberArray.pop();
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};

function resetClicked(){
    typedNumberArray = [];
    typedNumberString = "";
    additionReservedNumber = 0;
    substractionReservedNumber = 0;
    divisionReservedNumber = 0;
    multiplicationReservedNumber = 0;
    resultReservedNumber = 0;
    textArea.innerHTML = "0";
};

const firstTheme = document.getElementById("radio-theme1");
const secondeTheme = document.getElementById("radio-theme2");
const thirdTheme = document.getElementById("radio-theme3");


const body = document.querySelector("body");
const radioBox = document.querySelector(".radio-box");
const screen = document.querySelector(".screen");
const ButtonArea = document.querySelector(".button-area");
const similarBtns = document.querySelectorAll(".similar-btns");
const sameStyleBtn = document.querySelectorAll(".same-style-btn");


firstTheme.addEventListener("input", firstThemeRender);
secondeTheme.addEventListener("input", secondeThemeRender);
thirdTheme.addEventListener("input", thirdThemeRender);



function firstThemeRender(){
    body.style.backgroundColor = "var(--main-background-1)";
    body.style.color = "white";
    radioBox.style.background = "var(--toggle-keypad-background-1)";
    screen.style.background = "var(--screen-background-1)";
    ButtonArea.style.background = "var(--toggle-keypad-background-1)";
    similarBtns.forEach(button => {
        button.style.background = "var(--key-background-1-2)";
        button.style.boxShadow = "0 3px 0 var(--key-shadow-1-3)";
        button.style.color = "var(--Very-dark-grayish-blue-1)";
    });
    sameStyleBtn.forEach(button => {
        button.style.background = "var(--key-background-1)";
        button.style.boxShadow = "0 3px 0 var(--key-shadow-1)";
        button.style.color = "white";
    });
    resultBtn.style.background = "var(--key-background-toggle-1)";
    resultBtn.style.boxShadow = "0 3px 0 var(--key-shadow-1-2)";
    resultBtn.style.color = "white";
}

function secondeThemeRender(){
    body.style.backgroundColor = "var(--main-background-2)";
    body.style.color = "var(--Very-dark-grayish-2)";
    radioBox.style.background = "var(--toggle-keypad-background-2)";
    screen.style.background = "var(--screen-background-2)";
    ButtonArea.style.background = "var(--toggle-keypad-background-2)";
    similarBtns.forEach(button => {
        button.style.background = "var(--key-background-2-2)";
        button.style.boxShadow = "0 3px 0 var(--key-shadow-2-3)";
        button.style.color = "var(--Very-dark-grayish-2)";
        
    });
    sameStyleBtn.forEach(button => {
        button.style.background = "var(--key-background-2)";
        button.style.boxShadow = "0 3px 0 var(--key-shadow-2)";
        button.style.color = "white";
    });
    resultBtn.style.background = "var(--key-background-toggle-2)";
    resultBtn.style.boxShadow = "0 3px 0 var(--key-shadow-2-2)";
    resultBtn.style.color = "white";
}

function thirdThemeRender(){
    body.style.backgroundColor = "var(--main-background-3)";
    body.style.color = "var(--Light-yellow-3)";
    radioBox.style.background = "var(--toggle-keypad-screen-background-3)";
    screen.style.background = "var(--toggle-keypad-screen-background-3)";
    ButtonArea.style.background = "var(--toggle-keypad-screen-background-3)";
    similarBtns.forEach(button => {
        button.style.background = "var(--key-background-3-2)";
        button.style.boxShadow = "0 3px 0 var(--key-shadow-3-3)";
        button.style.color = "var(--Light-yellow-3)";
    });
    sameStyleBtn.forEach(button => {
        button.style.background = "var(--key-background-3)";
        button.style.boxShadow = "0 3px 0 var(--key-shadow-3)";
        button.style.color = "white";
    });
    resultBtn.style.background = "var(--key-background-toggle-3)";
    resultBtn.style.boxShadow = "0 3px 0 var(--key-shadow-3-2)";
    resultBtn.style.color = "var(--Very-dark-blue-3)";
}

const zeroBtn = document.getElementById("zero-btn");
const oneBtn = document.getElementById("one-btn");
const twoBtn = document.getElementById("two-btn");
const threeBtn = document.getElementById("three-btn");
const fourBtn = document.getElementById("four-btn");
const fiveBtn = document.getElementById("five-btn");
const sixBtn = document.getElementById("six-btn");
const sevenBtn = document.getElementById("seven-btn");
const eightBtn = document.getElementById("eight-btn");
const nineBtn = document.getElementById("nine-btn");
const pointBtn = document.getElementById("point-btn");
const plusBtn = document.getElementById("plus-btn");
const subtractBtn = document.getElementById("subtract-btn");
const divideBtn = document.getElementById("divide-btn");
const multiplyBtn = document.getElementById("multiply-btn");
const deleteBtn = document.getElementById("delete-btn");
const resetBtn = document.getElementById("reset-btn");
const resultBtn = document.getElementById("result-btn");


zeroBtn.addEventListener("click", zeroClicked);     
oneBtn.addEventListener("click", oneClicked);      
twoBtn.addEventListener("click", twoClicked);      
threeBtn.addEventListener("click", threeClicked);    
fourBtn.addEventListener("click", fourClicked);     
fiveBtn.addEventListener("click", fiveClicked);     
sixBtn.addEventListener("click", sixClicked);      
sevenBtn.addEventListener("click", sevenClicked);    
eightBtn.addEventListener("click", eightClicked);    
nineBtn.addEventListener("click", nineClicked);     
pointBtn.addEventListener("click", pointClicked);    
plusBtn.addEventListener("click", plusClicked);     
subtractBtn.addEventListener("click", subtractClicked); 
divideBtn.addEventListener("click", divideClicked);   
multiplyBtn.addEventListener("click", multiplyClicked); 
deleteBtn.addEventListener("click", deleteClicked);   
resetBtn.addEventListener("click", resetClicked);    
resultBtn.addEventListener("click", resultClicked); 




function zeroClicked(){
    typedNumberArray.push("0");
    typedNumberString = typedNumberArray.join(""); // Array to string without virgule
    textArea.innerHTML = typedNumberString;
};
function oneClicked(){
    typedNumberArray.push("1");
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};
function twoClicked(){
    typedNumberArray.push("2");
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};
function threeClicked(){
    typedNumberArray.push("3");
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};
function fourClicked(){
    typedNumberArray.push("4");
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};
function fiveClicked(){
    typedNumberArray.push("5");
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};
function sixClicked(){
    typedNumberArray.push("6");
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};
function sevenClicked(){
    typedNumberArray.push("7");
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};
function eightClicked(){
    typedNumberArray.push("8");
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};
function nineClicked(){
    typedNumberArray.push("9");
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};

function pointClicked(){
    typedNumberArray.push(",");
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};





function plusClicked(){
    if(typedNumberString != 0){ 
        additionReservedNumber = parseFloat(typedNumberString.replace(",",".")); // To have "." instead of "," in the calcul
    }else{
        return undefined; // to ignore the "more than one click"
    }
    typedNumberArray = [];
    typedNumberString = 0;
    // textArea.innerHTML = typedNumberArray;
};
function subtractClicked(){
    if(typedNumberString != 0){ 
        substractionReservedNumber = parseFloat(typedNumberString.replace(",","."));
    }else{
        return undefined;
    }
    typedNumberArray = [];
    typedNumberString = 0;
    textArea.innerHTML = typedNumberArray;
};
function divideClicked(){
    if(typedNumberString != 0){ 
        divisionReservedNumber = parseFloat(typedNumberString.replace(",","."));
    }else{
        return undefined;
    }
    typedNumberArray = [];
    typedNumberString = 0;
    textArea.innerHTML = typedNumberArray;
};
function multiplyClicked(){
    if(typedNumberString != 0){ 
        multiplicationReservedNumber = parseFloat(typedNumberString.replace(",","."));
    }else{
        return undefined;
    }
    typedNumberArray = [];
    typedNumberString = 0;
    textArea.innerHTML = typedNumberArray;
};

const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
const lightMode = window.matchMedia("(prefers-color-scheme: light)");


function screenModes(){
    
    if(darkMode.matches){
        firstTheme.setAttribute("checked","");
        secondeTheme.removeAttribute("checked");
    }
    else if (lightMode.matches){
        firstTheme.removeAttribute("checked");
        secondeTheme.setAttribute("checked","");
    }
}

screenModes();
darkMode.addEventListener("change",screenModes);
lightMode.addEventListener("change",screenModes);
