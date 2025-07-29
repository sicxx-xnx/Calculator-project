let firstNumberInput = ""
let secondNumberInput = ""
let operatorInput = ""
const operatorContainer = document.querySelector(".operators")
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const divide = document.querySelector("#divide")
const multiply = document.querySelector("multiply")
const zero = document.querySelector("#zero")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
one.addEventListener("click",() => {
    if (operatorInput == "" && firstNumberInput !== "" ) {
    firstNumberInput += "1"
} else if (operatorInput == "" && firstNumberInput == "") {
    firstNumberInput = "1"
} else if (operatorInput !== "" && secondNumberInput !== "" ) {
    secondNumberInput += "1"
} else if (operatorInput !== "" && secondNumberInput == "") {
    secondNumberInput = "1"
} else { return "error, please clear the calculator"
    
} {
    
} {
    
} {
    
}    
})
zero.addEventListener("click",()=> {
if (operatorInput == "" && firstNumberInput !== "" ) {
    firstNumberInput += "0"
} else if (operatorInput == "" && firstNumberInput == "") {
    firstNumberInput = "0"
} else if (operatorInput !== "" && secondNumberInput !== "" ) {
    secondNumberInput += "0"
} else if (operatorInput !== "" && secondNumberInput == "") {
    secondNumberInput = "0"
} else { return "error, please clear the calculator"
    
} {
    
} {
    
} {
    
}    
})
two.addEventListener("click",()=> {
if (operatorInput == "" && firstNumberInput !== "" ) {
    firstNumberInput += "2"
} else if (operatorInput == "" && firstNumberInput == "") {
    firstNumberInput = "2"
} else if (operatorInput !== "" && secondNumberInput !== "" ) {
    secondNumberInput += "2"
} else if (operatorInput !== "" && secondNumberInput == "") {
    secondNumberInput = "2"
} else { return "error, please clear the calculator"
    
} {
    
} {
    
} {
    
}    
}) 
three.addEventListener("click",()=> {
if (operatorInput == "" && firstNumberInput !== "" ) {
    firstNumberInput += "3"
} else if (operatorInput == "" && firstNumberInput == "") {
    firstNumberInput = "3"
} else if (operatorInput !== "" && secondNumberInput !== "" ) {
    secondNumberInput += "3"
} else if (operatorInput !== "" && secondNumberInput == "") {
    secondNumberInput = "3"
} else { return "error, please clear the calculator"
    
} {
    
} {
    
} {
    
}    
})


operatorContainer.addEventListener("click",(e) => {
target = e.target    
switch (target.id) {
    case "plus": operatorInput = "+"
        
     break;
    case "minus": operatorInput = "-"
        
     break;
    case "divide": operatorInput = "/"
        
     break;
    case "multiply": operatorInput = "X"
        
    break;

    default:
        break;
}    
})














const mathfunction = {
add : function(a,b) {return a+b},
subtract : function(a,b) {return a-b},
divide : function(a,b) {return a/b},
multiply : function(a,b) {return a*b},    
}

