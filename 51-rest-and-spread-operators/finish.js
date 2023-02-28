/** ЗАДАЧА 51 - Операторы "rest" (остаток) и "spread" (распространение)
 *
 * 1. Создайте функцию "meanScore",
 * которая будет принимать любое количество аргументов,
 * объединять их в один массив и возвращать среднее значение всех аргументов,
 * округленное до 2 знаков после запятой.
 *
 * 2. Если хотя бы один элемент в этом массиве не является числом -
 * выводим в консоль следующую ошибку:
 * "Все аргументы в вызове функции должны быть числами!"
 *
 * ПОДСКАЗКА: В этом задании вы должны использовать как оператор "rest",
 * так и оператор "spread".
 */

let meanScore = (...args) => {
  let arr = [...args].reduce((acc, tek) => acc.concat(tek), [])
  if (arr.every(el => typeof el !== 'number')){
    return 'not a number'
  } else {
    return arr.reduce((acc,tek) => (acc + tek)/(arr.length + 1))
  }
}

const scores1 = [0, 1.5, 2.5, 3.7]
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2]
const scores3 = [1.3, 2.5, 1.9]
const scores4 = ['abc', 1.3, true, 2.5, 1.9]

console.log(meanScore(scores1))
// 1.93

console.log(meanScore(scores1,scores2))
// 2.8

console.log(
  meanScore(scores1,scores2,scores3)
)
// 2.59

console.log(meanScore(scores4))
// Все аргументы в вызове функции должны быть числами!
