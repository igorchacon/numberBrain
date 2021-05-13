const validateValue = (value) => {
    if (value) {
        return true;
    } else {
        return false;
    }
};

const oddEven = (value) => {
    console.log(value);
    if (value%2 === 0) {
        return true;
    } else {
        return false;
    }
};

const appendOddEven = (value) => {
    if (oddEven(value)) {
        let node = document.createElement("div");
        let textnode = document.createTextNode("The number "+ value +" is even");
        node.appendChild(textnode);
        document.getElementById("oddeven-result").appendChild(node).setAttribute("class", "results");
    } else {
        let node = document.createElement("div");
        let textnode = document.createTextNode("The number "+ value +" is odd"); 
        node.appendChild(textnode);
        document.getElementById("oddeven-result").appendChild(node).setAttribute("class", "results");
    }
}

const prime = (value) => {
    for(let i = 2; i < value; i++)
        if(value % i === 0) return false;

    return value > 1;
};

const appendPrime = (value) => {
    if (prime(value)) {
        let node = document.createElement("div");
        let textnode = document.createTextNode("The number "+ value +" is prime");
        node.appendChild(textnode);
        document.getElementById("prime-result").appendChild(node).setAttribute("class", "results");
    } else {
        let node = document.createElement("div");
        let textnode = document.createTextNode("The number "+ value +" is NOT prime");
        node.appendChild(textnode);
        document.getElementById("prime-result").appendChild(node).setAttribute("class", "results");
    }
}

var isSquare = function (n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
};

const fibonacci = (value) => {
    if (isSquare(5*(value*value)-4) || isSquare(5*(value*value)+4)) {
        return true;
    } else { 
        return false; 
    }
};

const appendFibonacci = (value) => {
    if (fibonacci(value)) {
        let node = document.createElement("div");
        let textnode = document.createTextNode("The number "+ value +" does pertences to fibonacci");
        node.appendChild(textnode);
        document.getElementById("fibo-result").appendChild(node).setAttribute("class", "results");
    } else {
        let node = document.createElement("div");
        let textnode = document.createTextNode("The number "+ value +" does NOT pertences to fibonacci");
        node.appendChild(textnode);
        document.getElementById("fibo-result").appendChild(node).setAttribute("class", "results");
    }
};

const isMultipleFour = (value) => {
    if (value%4 === 0) {
        return true;
    } else {
        return false;
    }
};

const pin = (value) => {
    let arrayNumber = [];
    let newValue = parseInt(value)
    for (let i = 1; i < newValue + 1; i++) {
        if (isMultipleFour(i)) {
            arrayNumber.push("pin")
        } else {
            arrayNumber.push(i)
        }
    }

    return arrayNumber;
};

const appendPin = (value) => {

    const arrayPins = pin(value);

    for (let i = 0; i < arrayPins.length; i++) {
        let node = document.createElement("div");
        let textnode = document.createTextNode(arrayPins[i]);
        node.appendChild(textnode);
        document.getElementById("pin-result").appendChild(node);
    }
};

const callTasks = (value) => {
    if (validateValue(value)) {
        appendOddEven(value);
        appendFibonacci(value);
        appendPrime(value);
        appendPin(value);
    } else {
        alert("Please, insert a valid value.");
    }
    
}


