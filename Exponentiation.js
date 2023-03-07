// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

const x = prompt('Введите число, которое хотите возвести в степень:');
const n = prompt('Введите степень:');

function powValue() {
    if (n > 0) {
        return x * n
    } else {
        return 'Степень должна быть положительной'
    }
}
const result = powValue(x, n);
console.log(result);

// Задача с https://learn.javascript.ru/function-basics#tasks