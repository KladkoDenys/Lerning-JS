// const myCity = {
// 	city : 'NY',
// 	popular : true,
// 	country : 'USA'
// }

// function showCity() {
// 	console.log(myCity.city);
// 	console.log(myCity.popular);
// 	console.log(myCity.country)
// }

// showCity();

// myCity.popular =false;
// myCity.city = 'LA';
// myCity.country = 'UA';

// showCity();

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(err => console.log(err.message))



let randomArray = (arrayQuantity, min, max) => {
  let generatedArray = []
  for (let i = 0; i < arrayQuantity; i++) {
    generatedArray.push(Math.floor(Math.random() * (max - min) + min))
  }
  return generatedArray;
} 

// --------------leson1 ----
// let arrayLeson1 = randomArray(8, 1, 10);

// console.log(arrayLeson1)

// const newArreyLeson1= []
// arrayLeson1.forEach( el => newArreyLeson1.push(Math.pow(el, 2)) );

// console.log(`newArreyLeson1 - ${newArreyLeson1}`)

// ----------------------LEson 2--

// let arrayLeson2 = randomArray(4, 1, 5);
// console.log(arrayLeson2)

// let sum = 0;
// arrayLeson2.forEach(el => sum = el + sum)

// console.log(sum)

// ----------------------Leson 3-------------

// let arrayLeson3 = randomArray(4, 1, 5);
// console.log(arrayLeson3)

// let newArrey = arrayLeson3.map(el => Math.pow(el,2))
// console.log(newArrey)

// ----------------------Leson 4,5-------------

// let arrayLeson3 = randomArray(4, -1, 5);
// console.log(arrayLeson3)

// console.log(arrayLeson3.every(el => el > 0) )
// console.log(arrayLeson3.some(el => el < 0))

// ---------------------Leson 6 -----------------
// Дан массив с числами. Оставьте в нем только отрицательные числа

// let arrayLeson6 = randomArray(10, -10, 10);
// console.log(arrayLeson6)

// let negativeValuesArray = (array) => {
//   let newArray = array.filter(el => el < 0)
//   return newArray
// }

// console.log(negativeValuesArray(arrayLeson6))


// ---------------------Leson 7 -----------------
// Дан массив с числами. Оставьте в нем только четные числа.

// let arrayLeson7 = randomArray(10, -10, 10);
// console.log(arrayLeson7)

// let pairNumber = (array) => {
//   let newArray = array.filter(el => el % 2 === 0);
//   return newArray
// }

// console.log(pairNumber(arrayLeson7))

// -----------------Leson 8 --------------------
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

// let stringArray = ['dfdf', 'dddddddfdf', 'dfdf', 'dfdf', 'dfdf', 'df', 'dfdddddf', 'dfdddddf',' dfdf', 'dfdf', 'dfddddddf', 'd'];

// let stringTest = (array) => {
//   return array.filter(el => el.length > 5)
// }

// console.log(stringTest(stringArray))

// ----------------Leson 9

// Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.

let arr = [1, 'string', [3, 4], 5, [6, 7]];

let fun = (aray) => { 
  return aray.filter(el => aray.isArray(el))
}

console.log(fun(arr));