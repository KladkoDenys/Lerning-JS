/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
}

// // Option 1
// const mult = (obj) => {
//   return Object.values(obj).reduce((sum,el) => sum * el,1)
// }

// Option 2
const mult = ({x, y, z}) => x * y *z

const result = mult(objectWithNumbers)
console.log(result)
// 300
