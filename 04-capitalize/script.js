/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {

    const newStr = [];

    str = str.split(' ');

    str = str.filter(Boolean);
 
    for (let i = 0; i < str.length; i++) {
        newStr[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }

    return newStr.join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('ывавы ваыва   ывава ыва   ыва ываваы')); // "Молодость Всё Простит"