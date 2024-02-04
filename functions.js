function addTwoNumbers(num1, num2) {
    var sum = 0;
    sum = num1 + num2;
    return sum;
}

function sayHello(name) {
    if (name === 'Will') {
        return `No more testing ${name}!`;
    }
    return `Hi there ${name}!`;
}

function buildCar(color, type) {
    if (color === undefined && type === undefined) {
        return {}
    } else {
    return {
        color: color,
        type: type,
    } 
    }
}


module.exports = {
    addTwoNumbers,
    sayHello,
    buildCar
}


