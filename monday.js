var pi = 3.1415;
console.log(typeof pi);
var radius = 5;
var area = pi * radius;
console.log(area);
console.log(
	'The area of the given circle given the radius ' +
		radius +
		' is ' +
		radius * radius
);
radius = 7;
console.log('The area of the circle given the radius is ${radius}');
// PART 1//////////
console.log(10 + 24 === 34);
console.log('10' + '24' === '1024');
console.log('Hello' + ' ' + 2021 === 'Hello 2021');
console.log(1 + 2 * 3 === 7);
console.log((1 + 3) ** 2 === 16);
console.log(1 / 0 === Infinity);
console.log(6 % 2 === 0);
console.log(5.5 % 2 === 1.5);
console.log(Number('123') === 123);
console.log(typeof (1 + '') === 'string');
// PART 2//////////////
console.log(5 == '5');
console.log((5 === '5') === false);
console.log((8 != 8.0) === false);
console.log((8 !== 8.0) === false);
console.log(('true' === true) === false);
console.log(4 <= 4.0);
console.log(7 >= 7);
// PART 3///////
console.log(true && true);
console.log(true && false === false);
console.log(true || true);
console.log(false || false === false);
console.log(!true === false);
console.log(!false);
console.log((false && (true || true)) === false);
console.log((false && true) || true);
// PART 4 -- CONDITIONALS///////////
var x = 24;
if (x > 0) {
	console.log(`${x} is a positive `);
} else if (x < 0) {
	console.log(`${x} is less than Zero`);
} else {
	console.log(`${x} is zero`);
}
//
var a = 1;
var b = 4;
var c = 80;
console.log(
	`${a} is the smallest number, ${c} is the biggest number between a = ${a}, b = ${b}, and c= ${c}`
);
// PART 5 -- LOOPS //////////////
var a = 0;
var b = 5;
for (var i = a; a < b; a++) {
	console.log(`output:` + (a + 1));
}

var c = 8;
var d = 4;
for (var i = c; c > d; c--) {
	console.log(c - 1);
}
// PART 2
var x = 5;
var y = 500;

// PART 6 FUNCTIONS ////////
function wow() {
	console.log(`Wow, it worked`);
}
wow();
function myFavoriteMovie() {
	console.log(`My favorite movie is The Hangover `);
}
myFavoriteMovie();

function name(name) {
	console.log(`My name is ${name}, so you can call me ${name}`);
}
name('josh');

function conditional(a, b, c) {
	console.log(
		`${a} is the smallest number, ${c} is the biggest number between a = ${a}, b = ${b}, and c= ${c}`
	);
}
conditional(12, 45, 68);

function seriesOfNumber(a, b) {
	for (var i = a; a > b; a--) {
		console.log(a - 1);
	}
}
seriesOfNumber(8, 5);

function getLeapYears(start, end) {
	if (start % 4 === 0) {
		console.log(`${start}`);
	}
}
getLeapYears(2019, 0);

//SWAPPING VALUES///////////////////
var a = 111;
var b = 999;
let temp;
console.log(a, b);
console.log(`The value of a is ${a}`);
console.log(`The value of b os ${b}`);
temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);
console.log(`The value of a is ${a}`);
console.log(`The value of b is ${b}`);
//RANDOM NUMBER /////////////////////////
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(4.87)); //4
console.log(Math.ceil(4.17)); //5
console.log(Math.round(1.51)); //2
// Magic 8 Ball ///////////////////
const randomNumber = Math.floor(Math.random() * 2);
console.log(randomNumber);
function play() {
	if (randomNumber === 0) {
		console.log(`Yes`);
	} else {
		console.log(`No`);
	}
}
play();
