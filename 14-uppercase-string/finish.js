/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */


let string1 = 'My name is'

console.log(string1 instanceof String);
console.log(typeof string1)
let string2 = string1.toUpperCase()
console.log(string2)

// const myString = new String('Bogdan')

// console.log(myString instanceof String)
// console.log(typeof myString)
// console.log(myString.toUpperCase())