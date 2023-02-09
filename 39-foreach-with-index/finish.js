/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ['London', 'New York', 'Singapore']

let sityInfo = (city, index,arr)=>{
	return `${city} is at the index ${index} in the ${arr} array`
}

myCities.forEach((el, index) => {
	console.log(sityInfo(el, index, 'myCities'))
});



// let cityInfo = (arr) => { 
// 	return arr.forEach((el, index) => { 
// 		console.log(`${el} is at the index ${index} in the ${arr} array`)
// 	})	
// }

// cityInfo(myCities)

