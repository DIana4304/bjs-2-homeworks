'use strict'

function solveEquation(a, b, c) {
	let arr = [];
	let Discriminant = (b ** 2) - 4 * a * c;

	if (Discriminant > 0) {
		arr[0] = (-b + Math.sqrt(Discriminant)) / (2 * a);
		arr[1] = (-b - Math.sqrt(Discriminant)) / (2 * a);
	} else if (Discriminant === 0) {
		arr[0] = -b / (2 * a);
	} else {
		console.log('Уравнение не имеет корней');
	}
	
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentMonth = percent / 100 / 12;
	let sum = amount - contribution;
	let monthlyPayment = sum * (percentMonth + (percentMonth / (((1 + percentMonth)**countMonths) - 1)));
	let Sum = countMonths * monthlyPayment;
	
	return +Sum.toFixed(2);
}