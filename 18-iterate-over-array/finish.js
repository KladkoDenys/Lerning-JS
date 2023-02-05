/** ЗАДАЧА 18 - Перебор элементов массива
 *
 * 1. Создайте массив с несколькими элементами
 *
 * 2. Используя один из методов массивов, переберите все элементы
 * и выведите каждый элемент в консоль
 */


let myArray = [1,2,3,4,5,6]

// myArray.forEach((el)=>{
// 	el *=2
// 	console.log(el)
// })

// let fnArray = (el)=>{
// 	return el *=2
// }

let newArray = myArray.map((el)=> el *= 2.21)
// myArray.forEach(fnArray())

// console.log(myArray)
console.log(newArray)
// myArray.forEach()
