// let login;

// let name;

// name = 'Den'

// login = name

// console.log(login)

// ------------------------------------------------

// let productPrice1 = 101.5; // цена 1го продукта
// let productPrice2 = 50.25; // цена 2го продукта
// let productPrice3 = 10.11; // цена 3го продукта

// let productQuantity1 = 5;  // количество единиц 1го продукта на складе
// let productQuantity2 = 9;  // количество единиц 2го продукта на складе
// let productQuantity3 = 15; // количество единиц 3го продукта на складе

// let priceArray = [];
// priceArray.push(productPrice1,productPrice2,productPrice3)
// let productsArray = [];
// productsArray.push(productQuantity1,productQuantity2,productQuantity3);

// let averagePrice;

// let averagePriceCalc = (array) => {
// 	let sum = array[0] + array[1] + array[2];
// 	averagePrice = sum / array.length;
// 	return averagePrice;
// }

// console.log("Averege prise is " + averagePriceCalc(priceArray))

// let productSum;
// let productSumCalc = (array1,array2) =>{
// 	productSum = (array1[0] * array2[0]) + (array1[1] * array2[1]) + (array1[2] * array2[2])
// 	return productSum 
// }

// console.log('Products sum - ' + productSumCalc(priceArray,productsArray))
// -----------------------------------------------------------------

// const userProfile = {
// 	name : 'Den',
// 	age : 23
// }
// const {name,age} = userProfile
// console.log(name,age)
// ---------------------------------------------------------------------
// const fruits = ['Apple','Banana'];
// const [fruitOne, fruitTwo] = fruits;
// console.log(fruitOne);  //--Apple
// console.log(fruitTwo);  //--Banana
// --------------------------------------------------------------------------
// const userProfile = {
// 		name : 'Den',
// 		age : 23,
// 		city : ' Kiyv'}
// const userInfo = ({name,city})=>{
// 	return name + city  }
// console.log(userInfo(userProfile))
// -----------------------------------------------
// let a = 10;
// if(a === 20){
// 	a+=1
// }else if(a === 140){
// 	a+=45
// }else(a)
// console.log(a)
// --------------------

// let sumPositivnumber = (a,b) =>{
// 	if(typeof a !== 'number' || typeof b !=='number'){
// 		return console.log(`a or b is not a number`)
// 	}

// 	if(a <= 0 || b<= 0){
// 		return console.log(`A o B < 0`)
// 	}

// 	return console.log(a+b)
// }
// sumPositivnumber(5,"den")
// sumPositivnumber(-5,5)
// sumPositivnumber(5,5)
// -----------------------------------------------------------

switch(Выражение){
	case A: 
		// Действие если Выражение === А
		break
	case B: 
		// Действие если Выражение === B
		break
	default
	// Действие по умолчанию
}
