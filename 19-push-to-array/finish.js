/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */


let myArray = [1,2,3,4]

let myInfo = {
	name: 'Den',
	surname: 'Kladko',
	phoneNumer : '0638916761'
}

// myArray.push(myInfo.name)
// myArray.push(myInfo.surname)
// myArray.push(myInfo.phoneNumer)
myArray.push(myInfo.name, myInfo.surname, myInfo.phoneNumer)
console.log(myArray)

console.log(myArray.length)
