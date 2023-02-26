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

// let arr = [1, 'string', [3, 4], 5, [6, 7]];

// let newArr = []

// let fun = (aray) => { 
//   newArr = aray.filter(el => Array.isArray(el))
//   return newArr
// };

// console.log(fun(arr))

// ----------------Leson 10
// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.

// let arrayLeson10 = randomArray(10, -10, 10);
// console.log(arrayLeson10)

// let newArr =[]

// let func =(arr) => {

// newArr = arr.filter(el => el < 0) 

//   return newArr.length
// }

// console.log(func(arrayLeson10))

// / ----------------Leson 11
// Дан массив с числами. Найдите сумму этих чисел

// let arrayLeson11 = randomArray(3, 0, 5);
// console.log(arrayLeson11)

// console.log(arrayLeson11.reduce((acc,el) => acc + el))

// / ----------------Leson 12
// Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.

// let arrayLeson12 = [ 2, 1, 0, 2, 2,0,2,2 ]
// let mySum =0;

// let fun = (arr) => {
//   arr.reduce((sum,el) => {
//     if(el == 0){
//       return mySum = sum
//     }else { sum + el}
//   })
//   return mySum
// }


// console.log(fun(arrayLeson12))
// ----

// let arr = [1, 2, 5, 0, 4, 5, 6,];

// const sum = arr.reduce((acc, amount) => {
//   if (amount == 0)
//     acc.skip = true;
//   if (!acc.skip)
//     acc.total += amount;
//   return acc;
// }, { skip: false, total: 0 }).total; 

// console.log(sum);