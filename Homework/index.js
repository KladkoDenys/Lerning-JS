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

let arrayLeson1 = randomArray(8, 1, 10);


console.log(arrayLeson1);