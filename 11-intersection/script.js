/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/


function intersection(arr1, arr2) {
    const firstArr = [];

    for (let elemArr1 of arr1) {
        for (let elemArr2 of arr2) {
            if (elemArr1 === elemArr2) {
                firstArr.push(elemArr1);
            }
        }
    }

    const secondArr = [];

    for (let i = 0; i < firstArr.length; i++) {
        if ((secondArr.indexOf(firstArr[i]) === -1) && (firstArr[i] !== '')) {
            secondArr.push(firstArr[i]);
        }
    }

    return secondArr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2, 2, 2, 3, 4, 5, 5, 6], [8, 91, 4, 1, 3, 4, 5, 5, 6, 4, 5,])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []