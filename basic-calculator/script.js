
const firstInputValueElement = document.getElementById("first-value");
const secondInputValueElement = document.getElementById("second-value");
const resultInputValueElement = document.getElementById("result-value");

const operationLabelElement = document.getElementById("operation");

const sumButtonElement = document.getElementById("+");
const substractButtonElement = document.getElementById("-");
const multiplyButtonElement = document.getElementById("*");
const divideButtonElement = document.getElementById("/");
const equalButtonElement = document.getElementById("=");
const clearButtonElement = document.getElementById("C");

let operation = "";
                          // "+"
function changeOperation(newOperation) {
  operation = newOperation; // "+"
  operationLabelElement.innerText = `Operatie: ${operation}`
}

sumButtonElement.addEventListener("click", function(){
  changeOperation("+")
});

substractButtonElement.addEventListener("click", function(){
  changeOperation("-")
});

multiplyButtonElement.addEventListener("click", function(){
  changeOperation("*")
});

divideButtonElement.addEventListener("click", function(){
  changeOperation("/")
});

clearButtonElement.addEventListener("click", function(){
  firstInputValueElement.value = "";
  secondInputValueElement.value = "";
  resultInputValueElement.value = "";
});

equalButtonElement.addEventListener("click", function(){
  const firstValue = Number(firstInputValueElement.value);
  const secondValue = Number(secondInputValueElement.value);

   if(operation === "+"){
    printResult(firstValue + secondValue)
   } else if (operation === "-"){
    printResult(firstValue - secondValue);
   } else if (operation === "*"){
    printResult(firstValue * secondValue);
   } else if (operation === "/"){
    printResult(firstValue / secondValue)
   }
})

function printResult(newValue){
  resultInputValueElement.value = newValue
}

const a = 5;
const b = "5";

console.log(a, b);