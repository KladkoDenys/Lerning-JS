
function mFn(a,b){
	a = a + 1;
	c = a +b;
	console.log(c)
	return c
}

function enotherA(k){
	k = k+1;
	return k
}

mFn(enotherA(1),3)

const personOne = {
	name : 'bob',
	age : 20
}

function incrPerson(person){
	let upPerson = Object.assign({},person)
	upPerson.age += 1
	return upPerson;
}

let upPersonOne = incrPerson(personOne);
console.log(personOne)
console.log(upPersonOne)




const myCity = {
	country : 'USA',
	city : 'NY'
}

function changeCity(city){
	let myCity2 = Object.assign({},city)
	myCity2.city = 'Kiev'
	return myCity2
}

let upMyCity = changeCity(myCity)
console.log(upMyCity)