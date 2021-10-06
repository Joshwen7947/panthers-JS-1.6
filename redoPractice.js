// FizzBuzz
// We have a function
function FIZZBUZZ(start) {
	// I want to repeat (For Loop) because I have to check many numbers
	// I want to start at 0 and go until I am equal to my input value, I will ascend by 1
	for (let i = 0; i <= start; i++) {
		// If 3 goes into 'i' evenly & 5 goes into 'i' evenly...
		if (i % 3 === 0 && i % 5 === 0) {
			// I want you to say this:
			console.log(`FizzBuzz`);
			// Also, if only 3 goes into 'i' evenly...
		} else if (i % 3 === 0) {
			// I want you to say this:
			console.log(`Fizz`);
			// Also, if only 5 goes into 'i' evenly...
		} else if (i % 5 === 0) {
			// I want you to say this:
			console.log(`Buzz`);
			// If you can't do anything else, at least do this:
		} else {
			console.log(i);
		}
	}
}
// I want to call my Function with a number
FIZZBUZZ(15);

// Fizzbuzz
function callAgain(number) {
	for (let i = 0; i <= number; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log(`ChickenFeet`);
		} else if (i % 3 === 0) {
			console.log(`Chicken`);
		} else if (i % 5 === 0) {
			console.log(`Feet`);
		} else {
			console.log(i);
		}
	}
}
callAgain(34);

//GCD
// FIND THE GREATEST NUMBER THAT DIVIDES TWO NUMBERS
// Takes two numbers
function gcd(num1, num2) {
	// A start point to loop
	let startPoint = 1;
	// Let's start at 1.   I want to go up by 1.  Until I am equal to num1
	for (let i = 1; i <= num1; i++) {
		// If along the way, num1 is divisable by 'i' & num2 is divisable by 'i'
		if (num1 % i === 0 && num2 % i === 0) {
			// Then j now equals i
			startPoint = i;
		}
	}
	// Please give me back j
	return startPoint;
}
console.log(gcd(10, 200));
// Redo
function gcdRepeat(num1, num2) {
	let x = 1;
	for (let i = 1; i <= num1; i++) {
		if (num1 % i === 0 && num2 % i === 0) {
			x = i;
		}
	}
	return x;
}
console.log(gcdRepeat(18, 100));
//
//
// PRIME NUMBER ---Mine
function isPrime(num) {
	if (num % 2 === 0) {
		console.log(false);
	} else {
		console.log(true);
	}
}
// isPrime(17);
// Logic --- Option 2
function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			console.log(i);
			return false;
		}
	}
	return num > 1;
}
let answer = isPrime(8);
console.log(answer);
// CAPTURE TIME
let exactYear = new Date().getFullYear();
let exactMinutes = new Date().getMinutes();
let exactMonth = new Date().getMonth();
let exactHours = new Date().getHours();
let exactDay = new Date().getDay();

console.log(
	`The exact date is ${exactMonth} ${exactDay}, ${exactYear} at ${exactHours} hours & ${exactMinutes} minutes.`
);
let fullDate = new Date();
console.log(fullDate);

// ///////GET A Random

let alpha = 'nceVRF453445fdfssfpqencmzzwitFEfrveiolvsCRHGYR7566324VFbyfnbr65';
function oneAlpha(x) {
	let char = x[Math.floor(Math.random() * alpha.length)];
	console.log(char);
	return char;
}
function createPassword(length) {
	let res = '';
	for (let i = 0; i < length; i++) {
		let newChar = oneAlpha(alpha);
		res += newChar;
	}
	return res;
}
console.log(createPassword(5));
let passwords = [];

passwords.push(createPassword(3));
console.log(passwords);
