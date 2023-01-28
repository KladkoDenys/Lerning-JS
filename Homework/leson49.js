// function multByFactor (value,multiplier = 1){
// 	return value * multiplier
// }

// console.log(multByFactor(2,5))

// const mult = function(value,multi = 2){
// 	return value * multi
// }

// console.log(mult(2))

// let c = (value,muti = 4) => {return value * muti;}

// console.log(c(5,5))
// __________________________________________________

// let newPost = (post, dataPost = Date()) => {
// 	let po ={
// 		...post,
// 		dataPost
// 	}
// 	return po
// }

// let info = {
// 	id : 1,
// 	name : 'Den'
// }

// let summ = newPost(info);
// console.table(summ)

// ----------------------------------------

// const fnWithError = () => {
// 	throw new Error('Some error')
// }

// try{
// 	fnWithError();
// }catch(error){
// 	console.error(error);
// }
// console.log('continue ...')

// -----------------------------------------
let myArrry = [1,2,'Den']
console.log(myArrry)
console.log(myArrry.length)
console.log(myArrry[0])
myArrry[1] = 'ABC' 
console.log(myArrry)
myArrry[myArrry.length] = 5
console.log(myArrry)
myArrry.push('d')
console.log(myArrry)
let cd = myArrry.pop()
console.log(myArrry)
console.log(cd)
myArrry.unshift('U')
console.log(myArrry)
myArrry.forEach(el => console.log(el *2))
console.log(myArrry)
let rest = myArrry.map(el => el + " MY")
console.log(rest)
let rest2 = myArrry.map((el) => {
	el = el + " de"
	return el
})
console.log(rest2)