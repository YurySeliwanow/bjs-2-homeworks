"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - (4 * a * c);
	if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	}
	if (d == 0) {
		arr.push(-b / (2 * a));
	}
	if (d < 0) {}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let p = percent / 100 / 12;
	let s = amount - contribution;
	let i = s * (p + (p / (((1 + p) ** countMonths) - 1)));
	let total = i * countMonths;
	total = Number(total.toFixed(2));
	return (total);
}