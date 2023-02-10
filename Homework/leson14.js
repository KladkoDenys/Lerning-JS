const myCity = {
	city : 'NY'
}
function show(){
	console.log(myCity);
}
show();
myCity.country = 'US';
show();
myCity.popular = true;
show();
delete myCity.country;
show();
delete myCity.popular;
show();
const namePopular = 'popular';
myCity[namePopular] = true;
show();
nameCountry = 'country';
myCity[nameCountry] = 'USA';
show();
delete myCity.country;
show();
const nameColor = 'color';
myCity[nameColor] ='red';
show();

// let findPostById = (id, arr) => {
// 	let findPost;
// 	arr.forEach((element) => {
// 	  if(element.postId === id)
// 		 findPost = element
// 	});
// 	return findPost
//  }
