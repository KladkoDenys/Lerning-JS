
// let country = 'US';
// let city = "NY";
// let myCity = {
// 	country,
// 	city
// }

// console.log(myCity);

const myCity = {
	counrty : 'UA',
	popular : true,
	people : '10k'
}
function showIt(){
	console.log(myCity)
}
showIt();

myCity.counrty = 'USA'
myCity.mainSquere = 'Maidan'
delete myCity.popular;
let city = 'mainCity';
myCity[city] = 'NY';
showIt();

myCity.color ={
	red : 'main',
	green : 'secondary',
}
showIt();

let myCityCopy = {...myCity}
showIt();

let JSONObject = JSON.stringify(myCityCopy);
console.log(JSONObject);

let JSONObject2 = JSON.parse(JSONObject)
console.log(JSONObject2);

let myCityCopy2 = JSON.parse(JSON.stringify(myCity));
console.log(myCityCopy2);