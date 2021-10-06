const programmers = [];

programmers[0] = 'Bill';
programmers[1] = 'Mark';
programmers[2] = 'Elon';
programmers[3] = 'Alan';

console.log(programmers);
programmers.pop();
programmers[1] = 'Alan';
console.log(programmers);

programmers.shift();
console.log(programmers);
// HINT HINT WINK WINK
const myCompanies = [`Zalo`, `Vietnam Airlines`];
const theirCompanies = [`Microsoft`, `SpaceX`];
// concat = add two arrays together
const techCompanies = myCompanies.concat(theirCompanies);
console.log(techCompanies);
// /////////////////////////////////////////////////////////////
let cars = [`Lambo`, `Ferrari`, `Range Rover`, `BMW`];
// add e to end
let newCars = cars.push(`Mercedez-Benz`);
console.log(cars);
// Remove last e
let lastCar = cars.pop();
console.log(lastCar);
// Remove first e
let first = cars.shift();
console.log(first);
// adds to start of array
let addFirst = cars.unshift(`Vinfast`);
console.log(cars);
//
cars.push(`Bentley`);
cars.push(`Audi`);
cars.push(`Porsche`);
console.log(cars);
// SLICE elements off that start before this index
console.log(cars.slice(2));
// SLICE from start(2 or 1) up to/not including end (4 or 5)
console.log(cars.slice(2, 4));
console.log(cars.slice(1, 5));
// SPLICE
// remove elements for index position
console.log(cars.splice(1, 3));
//
let placesLived = [`usa`, `indonesia`, `thailand`, `vietnam`];
// check if array contains something
console.log(placesLived.includes(`vietnam`));
console.log(placesLived.includes(`south korea`));
//
// function reverseArray(arr) {
// 	return arr.reverse();
// }
let arr = [1, 2, 3, 4, 5];
console.log(arr);
// console.log(reverseArray(arr));
//
function evenAndOdd(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			console.log(`This number is even ${arr[i]}`);
		} else {
			console.log(`This number is odd ${arr[i]}`);
		}
	}
}
evenAndOdd(arr);
//
function getRandomInt(start, end) {
	for (let i = start; i <= end; i++) {
		// console.log(i);
		let a = Math.floor(Math.random() * end) + 1;
		console.log(a);
	}
}

getRandomInt(0, 100);
