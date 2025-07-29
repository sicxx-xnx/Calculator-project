let firstNumberInput = ""
let secondNumberInput = ""
let operatorInput = ""
const zero = document.querySelector("#zero")
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














const mathfunction = {
add : function(a,b) {return a+b},
subtract : function(a,b) {return a-b},
divide : function(a,b) {return a/b},
multiply : function(a,b) {return a*b},    
}

