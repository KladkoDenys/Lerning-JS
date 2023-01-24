// const myCity = {
// 	city : 'Kyiv',
// 	popular : true,
// 	country : 'UA'
// };

// function showInConsile(){
// 	console.log(myCity);
// };

// showInConsile();

// console.log(myCity.city);
// console.log(myCity.country);
// console.log(myCity.popular);

// myCity.city = 'NY';
// myCity.country = 'USA';
// myCity.popular = false;
// showInConsile();

// myCity.people = '10k';
// myCity.square = 'big';
// myCity.center = 'Maidan'
// showInConsile();

// delete myCity.center;
// delete myCity.people;
// delete myCity.square;
// delete myCity.popular;
// showInConsile();

// let namePopular = 'popular';
// myCity[namePopular] = false;
// showInConsile();

// let name = 12;
// let green = 13;

// myCity.center = {
// 	color : 'red',
// 	size : 'big',
// 	name,
// 	green
// }

// showInConsile();

let person = {
	nameB : 'Bob',
	age : 18,
	friend :{
		first : 'Chack',
		second : 'Amanda'
	}
}

console.log(person)

let person2 = {...person};

console.log(person2);

let person3 = JSON.stringify(person);
console.log(person3);

let person4 = JSON.parse(person3);
console.log(person4);

let person5 = JSON.parse(JSON.stringify(person))
console.log(person5)



