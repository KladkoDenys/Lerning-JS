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

// switch(Выражение){
// 	case A: 
// 		// Действие если Выражение === А
// 		break
// 	case B: 
// 		// Действие если Выражение === B
// 		break
// 	default
// 	// Действие по умолчанию
// }
// ---------------------------------

// let ifConstr = (a) => {
// 	if(a > 0){
// 		console.log(` A > 0`);
// 	}
// 	if(a < 0){
// 		console.log(` A < 0`);
// 	}
// 	if(a === 0){
// 		console.log(` A = 0`);
// 	}
// 	return a;
// }

// ifConstr(4);
// ifConstr(-5);
// ifConstr(0)

// ---------------------------------

      //   let V;
      //   const Pi = 3.1415926535; 
      //   let r = 7
      //   let h = 8

		// 	let cilynderVolume = () =>{
		// 		if(r === 0 || h ===0 || !isNaN(r) || !isNaN(h)){
		// 			console.log("errorr")
		// 		}
		// 	return V = Pi * r * r * h;
		// 	}
		// 	cilynderVolume()

		// 	console.log(`Объем цилиндра с высотой ${h} и радиусом ${r} = ${V}`);

		// ------------------------------------------------------------
		// if(value == 1)
		// {
		// 	 alert("Вы ввели число 1");
		// }
		// else if(value == 2)
		// {
		// 	 alert("Вы ввели число 2");
		// }
		// else 
		// {
		// 	 alert("Вы ввели неправильное значение");
		// }
		// let value = 2;

		// switch(value){
		// 	case 1:
		// 		console.log("Вы ввели число 1");
		// 		break;
		// 	case 2:
		// 		console.log("Вы ввели число 2");
		// 		break;
		// 	default:
		// 		console.log("Вы ввели число esle");
		// 		break;
		// }
		// ---------------------


		// let result;

		// let season = (months) => {
		// 	if(isNaN(months)){
		// 		return console.log(`not a Number`);
		// 	}

		// 	if(months == 1 || months == 2 || months == 12){
		// 		return console.log(`winter`);
		// 	}

		// 	if(months >=3 && months <=5){
		// 		return console.log(`spring`);
		// 	}

		// 	if(months >=6 && months <=8){
		// 		return console.log(`summer`);
		// 	}

		// 	if(months >=9 && months <11){
		// 		return console.log(`fall`);
		// 	}

		// 	return console.log(`no 1-12`);
		// }
		// season('1')
		// season('5')
		// season('7')
		// season('9')
		// season('15')
		// season('dfdf')
		// season(2,15)

		// -------------------------

		// let country = 'Franc';

		// if(country == 'Great Britain' || country == 'USA'){
		// 	console.log("Английский язык");
		// }else if(country == 'Germany'){
		// 	console.log("Немецкий язык");
		// }else if(country == 'France'){
		// 	console.log("France язык");
		// }else{
		// 	console.log("Указанной страны нет в списке")
		// }

		// -----------------------------------------------------
		// const myObject = {
		// 	x: 10,
		// 	y: true,
		// 	z: 'abc'
		// }

		// for(const key in myObject) {
		// 	console.log(key, myObject[key])
		// }
// -----------------------------------------------------------------

// const myString = 'Hey'
// for (const letter of myString) {
// 	console.log(letter)
// }
// ---------------------------------------------------