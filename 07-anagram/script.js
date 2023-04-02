/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/


function anagram(str1, str2) {
    // Проверка на совпадение длин строк
    if (str1.length !== str2.length) {
        return false;
    }
    // Пребразование строк к нижнему регистру
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    // Проверка - являются ли слова одинаковыми
    if (str1 === str2) {
        return false;
    }
    // Преобразование строк в массивы
    str1 = str1.split('');
    str2 = str2.split('');
    // Функция сортировки массива по возрастанию
    function sortArr(arr) {
        let t;

        for (let i = arr.length - 1; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    t = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = t;
                }
            }
        }
        
        return arr;
    }
    // Сортировка массивов по возрастанию
    sortArr(str1);
    sortArr(str2);
    // Сравнение двух массивов
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            return false;
        }
        return true;
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('up', 'UP')); // true
// console.log(anagram('hello', 'bye')); // false