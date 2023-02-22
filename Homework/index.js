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

// ----------------------Leson 4-------------

let arrayLeson3 = randomArray(4, -1, 5);
console.log(arrayLeson3)

console.log(arrayLeson3.every(el => el > 0) )
console.log(arrayLeson3.some(el => el < 0) )