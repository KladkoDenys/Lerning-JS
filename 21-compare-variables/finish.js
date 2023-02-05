/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10
let myVariable2 = '5'

// let myFn = (a,b) => {
// 	let aNum = parseInt(a)
// 	let bNum = parseInt(b)
// 	if( aNum <= bNum){
// 		return true
// 	}
// 	return false
// }

let a = parseInt(myVariable1) <= parseInt(myVariable2)

console.log(a)
// console.log(myFn(myVariable1,myVariable2))

myVariable1 = 'frf'
myVariable2 = 100

console.log( parseInt(myVariable1) <= parseInt(myVariable2) )

// console.log(myFn(myVariable1,myVariable2))
