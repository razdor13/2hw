const num = +prompt("inter num");

if (
    Number.isInteger(num) &&
    ((-100000 < num && num < -9999) || (9999 < num && num < 100000))
) {
    const fifthDigit = Math.floor(num / 10000); // Витягуємо першу цифру
    const fourthDigit = Math.floor((num % 10000) / 1000); // Витягуємо другу цифру
    const thirdDigit = Math.floor((num % 1000) / 100); // Витягуємо третю цифру
    const secondDigit = Math.floor((num % 100) / 10); // Витягуємо четверту цифру
    const firstDigit = Math.floor(num % 10); // Витягуємо п'яту цифру

    const result = `${fifthDigit} ${fourthDigit} ${thirdDigit} ${secondDigit} ${firstDigit}`;
    alert(result);
}
