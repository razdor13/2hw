//1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let userName;

do {
    userName = prompt("What's your name?");
} while (userName === null || userName === "");

alert(`Hello, ${userName}! How are you?!`);

//2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let validInput = false;
let number1, number2, operation, result;

while (!validInput) {
    number1 = parseFloat(prompt("Введіть перше число:"));
    number2 = parseFloat(prompt("Введіть друге число:"));

    if (!isNaN(number1) && !isNaN(number2)) {
        validInput = true;
    } else {
        alert("Будь ласка, введіть числа.");
    }
}

validInput = false;

while (!validInput) {
    operation = prompt("Оберіть операцію: +, -, * або /");

    if (
        operation === "+" ||
        operation === "-" ||
        operation === "*" ||
        operation === "/"
    ) {
        validInput = true;
    } else {
        alert("Будь ласка, виберіть коректну операцію.");
    }
}

switch (operation) {
    case "+":
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "*":
        result = number1 * number2;
        break;
    case "/":
        if (number2 !== 0) {
            result = number1 / number2;
        } else {
            alert("Ділення на нуль!");
        }
        break;
}

alert(`Результат: ${result}`);

// 3!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let value1 = prompt("Введіть перше значення:");
let value2 = prompt("Введіть друге значення:");

if (value1 === value2) {
    alert(true);
} else {
    alert(false);
}

// 4!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let inputNumber;

do {
    inputNumber = prompt("Введіть п'ятизначне число:");
} while (
    inputNumber === null ||
    inputNumber.length !== 5 ||
    isNaN(inputNumber)
);

let number = parseInt(inputNumber); // Перетворюємо рядок на ціле число

let fifthDigit = Math.floor(number / 10000); // Витягуємо першу цифру
let fourthDigit = Math.floor((number % 10000) / 1000); // Витягуємо другу цифру
let thirdDigit = Math.floor((number % 1000) / 100); // Витягуємо третю цифру
let secondDigit = Math.floor((number % 100) / 10); // Витягуємо четверту цифру
let firstDigit = Math.floor(number % 10); // Витягуємо п'яту цифру

let result2 = `${fifthDigit} ${fourthDigit} ${thirdDigit} ${secondDigit} ${firstDigit}`;

alert(result2);
