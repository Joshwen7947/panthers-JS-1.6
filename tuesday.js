let studentScore1 = 2;
let studentScore2 = 19;
let studentScore3 = 22;
let studentScore4 = 4;

let studentScores = [
	studentScore1,
	studentScore2,
	studentScore3,
	studentScore4,
];
// console.log(studentScores[2]); //22
//
for (let index = 0; index < studentScores.length; index++) {
	let studentScore = studentScores[index];
	console.log(studentScores);
}
// for (let i = 0; i < array.length; i++) {}

let character = {
	health: 100,
	damage: 1000,
	inflictDamage: function () {
		console.log(`Inflict damages`);
	},
};
character.inflictDamage();

// FIZZBUZZ //////////////////////////////////////////////
function FIZZBUZZ(start, end) {
	for (let i = start; i <= end; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log(`FizzBuzz`);
		} else if (i % 3 === 0) {
			console.log(`Fizz`);
		} else if (i % 5 === 0) {
			console.log(`Buzz`);
		} else {
			console.log(i);
		}
	}
}
FIZZBUZZ(10, 34);
// GCD ////////////////////////////////////////////////
function gcd(num1, num2) {
	let j = 1;
	for (let i = 1; i <= num1; i++) {
		if (num1 % i === 0 && num2 % i === 0) {
			j = i;
		}
	}
	return j;
}

console.log(gcd(8, 26));
// PRIME NUMBER PRINT OUT////////////
function isPrime(n) {
	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			console.log(i);
			return false;
		}
	}
	return n > 1;
}
let a = isPrime(8);
console.log(a);
// CAPTURE TIME ///////////////////////////////

function captureTime() {
	let seconds = Date.now() / 1000;
	let minutes = seconds / 60;
	console.log(minutes);
	let hours = minutes / 60;
	console.log(hours);
	let days = hours / 24;
	console.log(days);
	let years = days / 365;
	console.log(years);
}
captureTime();
// BONUS///////
let yourAgeInMilliseconds = Date.now() - new Date('1997-07-04');
let test = (yourAgeInMilliseconds / 1000 / 60 / 60 / 24 / 365) * 52;
console.log(`I am ${Math.floor(test)} weeks old`);
// ADVANCED RANDOM NUMBER ///////////////////////////
for (let i = 0; i < 5; i++) {
	console.log(Math.random());
}

function getRandom() {
	for (let i = 0; i < 100; i++) {
		console.log(Math.floor(Math.random() * 10));
	}
}
getRandom();

// function getRandomInt(start, end) {
// 	for (let i = start; start < end; i++) {
// 		// console.log(Math.floor(Math.random() * 5));
// 		console.log(Math.floor(Math.random() * ));
// 	}
// }
// getRandomInt(5, 8);
function getRandomInt(start, end) {
	for (let i = start; i <= end; i++) {
		// console.log(i);
		let a = Math.floor(Math.random() * end) + 1;
		console.log(a);
	}
}
getRandomInt(5, 10);

// // happy(4538 % 4530);
// console.log(4538 % 4530);
// (((4538 / 10 ** i) % 4538) / 10 ** i) * 10;
// console.log(453 % 450);
// console.log(45 % 40);
// console.log(4);
// console.log(Math.floor(4583 / 10 / 10 / 10)); //4
// 4538
// Get Random Item /////////
let arr = ['jackfruit', 'pineapple', 'plum', 'dragonfruit', 'apple'];

function getRandomItem(arr) {
	let random = arr[Math.floor(Math.random() * arr.length)];
	console.log(random);
}
getRandomItem(arr);
// NESTED FOR LOOPS ///////////////////////////////////////////

// Why is this useful to know?  Like what could I be doing in the future that I should know this?
function counter(num) {
	for (i = 1; i <= num; i++) {
		for (j = 1; j <= i; j++) console.log(i);
	}
}
counter(10);
//// Why is this useful to know?  Like what could I be doing in the future that I should know this?
let hash = '#';
let space = ' ';
let size = 8;

for (let x = 1; x <= size; x++) {
	let line = ' ';
	for (var y = 1; y <= size; y++) {
		if (x % 2) {
			if (y % 2) {
				line = line + space;
			} else {
				line = line + hash;
			}
		} else {
			if (y % 2) {
				line = line + hash;
			} else {
				line = line + space;
			}
		}
	}

	console.log(line);
}
