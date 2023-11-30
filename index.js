//1
let userName;

do {
    userName = prompt("What's your name?");
} while (!userName);

alert(`Hello, ${userName}! How are you?!`);
//2
let firstNumber = prompt("Введіть перше число");

while (isNaN(firstNumber) || firstNumber.trim() === "") {
    firstNumber = prompt(
        "Будь ласка, введіть коректне перше число (тільки цифри)"
    );
}

let secondNumber = prompt("Введіть друге число");

while (isNaN(secondNumber) || secondNumber.trim() === "") {
    secondNumber = prompt(
        "Будь ласка, введіть коректне друге число (тільки цифри)"
    );
}

const parsedFirstNumber = parseFloat(firstNumber);
const parsedSecondNumber = parseFloat(secondNumber);

const operation = prompt("Введіть символ операції (+, -, *, /)");

let result;

if (
    (operation === "/" && parsedSecondNumber === 0) ||
    isNaN(parsedFirstNumber) ||
    isNaN(parsedSecondNumber)
) {
    result = "Невірні дані або ділення на нуль";
} else {
    switch (operation) {
        case "+":
            result = parsedFirstNumber + parsedSecondNumber;
            break;
        case "-":
            result = parsedFirstNumber - parsedSecondNumber;
            break;
        case "*":
            result = parsedFirstNumber * parsedSecondNumber;
            break;
        case "/":
            result = parsedFirstNumber / parsedSecondNumber;
            break;
        default:
            result = "Невірна операція";
            break;
    }
}
alert(`Результат: ${result}`);

//3
let value1 = prompt("Введіть перше значення:");
let value2 = prompt("Введіть друге значення:");

if (value1 === value2) {
    alert(true);
} else {
    alert(false);
}

let inputNumber;

//4
const input = prompt("enter num").replace(/-/g, "");

if ((input < 0 && input.length === 6) || (input > 0 && input.length === 5)) {
    const num = +input;
    const fifthDigit = Math.floor(num / 10000); // Витягуємо першу цифру
    const fourthDigit = Math.floor((num % 10000) / 1000); // Витягуємо другу цифру
    const thirdDigit = Math.floor((num % 1000) / 100); // Витягуємо третю цифру
    const secondDigit = Math.floor((num % 100) / 10); // Витягуємо четверту цифру
    const firstDigit = Math.floor(num % 10); // Витягуємо п'яту цифру

    const result2 = `${fifthDigit} ${fourthDigit} ${thirdDigit} ${secondDigit} ${firstDigit}`;

    alert(result2);
}
