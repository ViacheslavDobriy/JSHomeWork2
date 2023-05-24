console.log('Task 1');

const num1 = Number(prompt('Insert the first number: '));
const num2 = Number(prompt('Insert the second number: '));

if (num1 == 1 || num1 < 1) {
    if (num2 == 3 || num2 > 3) {
        console.log('Условия соблюдены - спасибо!');
    } else {
        console.log(`Вторая переменная (${num2}) не удовлетворяет условию.`);
    }
} else {
    console.log(`Первая переменная (${num1}) не удволетворяет условию.`);
}

console.log('Task 2');

let test = false ? console.log('+++'): console.log('---');

console.log('Task 3');

const min = 1;
const max = 32;
const day = Math.floor(Math.random() * (max - min) + min);
if (Number(day) >= 1 && Number(day) <= 10) {
    console.log(`${day} относится к первой декаде`);
} else {
    if (Number(day) > 10 && Number(day) <= 20) {
        console.log(`${day} относится к второй декаде`);
    } else {
        console.log(`${day} относится к тетьей декаде`);
    }
}

console.log('Task 4');

let userNumber = Number(prompt('Insert number: '));
let copyOfUserNumber = userNumber;
let arrayOfNumbers = [];

for (let index = 0; index < 3; index++) {

    arrayOfNumbers.push(copyOfUserNumber%10);
    copyOfUserNumber = Math.floor(copyOfUserNumber/10);
    
}

console.log(`В числе ${userNumber} количество сотен: ${arrayOfNumbers[2]}, десятков: ${arrayOfNumbers[1]}, единиц: ${arrayOfNumbers[0]}`);