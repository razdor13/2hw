//1
let userName;

do {
    userName = prompt("What's your name?");
} while (!userName);

alert(`Hello, ${userName}! How are you?!`);
//2
let firstNumber = prompt("Введіть перше число");

while (isNaN(firstNumber) || firstNumber?.trim() === "") {
    firstNumber = prompt(
        "Будь ласка, введіть коректне перше число (тільки цифри)"
    );
}

let secondNumber = prompt("Введіть друге число");

while (isNaN(secondNumber) || secondNumber?.trim() === "") {
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
const value1 = prompt("Введіть перше значення:");
const value2 = prompt("Введіть друге значення:");

alert(value1 === value2);

4;
const input = Number(prompt("Введіть п'ятизначне число"));

if (Number.isInteger(input) && Math.abs(input).toString().length === 5) {
    const num = Math.abs(input);

    const fifthDigit = Math.floor(num / 10000); // Витягуємо першу цифру
    const fourthDigit = Math.floor((num % 10000) / 1000); // Витягуємо другу цифру
    const thirdDigit = Math.floor((num % 1000) / 100); // Витягуємо третю цифру
    const secondDigit = Math.floor((num % 100) / 10); // Витягуємо четверту цифру
    const firstDigit = Math.floor(num % 10); // Витягуємо п'яту цифру

    const result = `${fifthDigit} ${fourthDigit} ${thirdDigit} ${secondDigit} ${firstDigit}`;
    alert(result);
}
