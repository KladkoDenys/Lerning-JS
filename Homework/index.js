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

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err.message))
