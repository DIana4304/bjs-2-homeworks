'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  let D = (b ** 2) - 4 * a * c;

  if (D > 0) {
    arr[0] = (-b + Math.sqrt(D)) / (2 * a);
    arr[1] = (-b - Math.sqrt(D)) / (2 * a);
  } else if (D === 0) {
    arr[0] = -b / (2 * a);
  } else {
    console.log('Уравнение не имеет корней');
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
	let S = amount - contribution;
	let monthlyPayment = S * (P + (P / (((1 + P)**countMonths) - 1)));
	let Sum = countMonths * monthlyPayment;
  
	return Sum.toFixed(2);
}