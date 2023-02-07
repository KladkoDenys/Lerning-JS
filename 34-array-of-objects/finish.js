/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

let wv = {
  carBrand: "WV",
  price: 3600,
  isAvailableForSale: true,
};

let vovlvo = {
  carBrand: "VOLVO",
  price: 4800,
  isAvailableForSale: false,
};

let bmw = {
  carBrand: "BMW",
  price: 2500,
  isAvailableForSale: true,
};

let myCar = [wv, vovlvo, bmw];

console.log(myCar);

myCar.push({
	carBrand: "Mersedes",
	price: 8700,
	isAvailableForSale: true,
})

console.log(myCar);
