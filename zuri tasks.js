const calculator = (firstNum, operator, secondNum) => {

    // Sanitizing User input
    if (isNaN(firstNum) || isNaN(secondNum)) {
        return "Integer value required!"
    }
    if (!["+", "-", "*", "%", "/"].includes(operator)) {
        return "Invalid Operator"
    }

    // Condition to check if operator is for addition
    if (operator === "+") {
        return firstNum + secondNum
    }

    // Condition to check if operator is for substraction
    else if (operator === "-") {
        return firstNum - secondNum
    }

    // condition to chec if opeartor is modulos
    else if (operator === "%") {
        return firstNum % secondNum
    }

    // Condition to check if operator is multiplication
    else if (operator === "*") {
        return firstNum * secondNum
    }

    // Condition to check if operator is division
    else if (operator === "/") {


        //Condition to check if division by zero is to be performed
        if (secondNum === 0) {
            return "Division by zero is impossible!"
        } else {
            return firstNum / secondNum
        }
    }
}

console.log(calculator(2, "/", 2))