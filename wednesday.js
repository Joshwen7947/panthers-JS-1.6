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
const myCompanies = [`Zalo`, `Shopee`];
// HINT HINT WINK WINK^^^^^^^^^^^^^^^^
const theirCompanies = [`Microsoft`, `SpaceX`];
// concat = add two arrays together
const techCompanies = myCompanies.concat(theirCompanies);
console.log(techCompanies);
// /////////////////////////////////////////////////////////////
let cars = [`Lambo`, `Ferrari`, `Range Rover`, `BMW`];
let old = cars.pop(2);
console.log(old);
console.log(cars);
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
// slice === only copies original array
// splice === mutate original array
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
let arr = [1, 2, 3, 4, 5];
console.log(arr);
function reverseArray(arr) {
	return arr.reverse();
}
console.log(reverseArray(arr));
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
	let evenArray = [];
	let oddArray = [];
	for (let i = start; i <= end; i++) {
		let a = Math.floor(Math.random() * end) + 1;
		if (a % 2 === 0) {
			evenArray.push(a);
		} else {
			oddArray.push(a);
		}
	}
	console.log(evenArray);
	console.log(oddArray);
}

getRandomInt(0, 100);
// OBJECTS ///////////////////////////////////////////////
let mark = {};
mark.fullName = 'Mark Zuckerberg';
// mark.company = 'Google';
mark['companies'] = 'Facebook'; // 2nd way to set property on object
mark.age = 18;
mark.city = 'San Francisco';

console.log(mark);
//
const elon = {
	age: 33,
	city: 'Austin',
	fullName: 'Elon Musk',
	companies: ['Space-X', 'Tesla'],
};

console.log(elon);

function isAdult(person) {
	if (person.age >= 18) {
		console.log(`Legal Adult`);
	}
}
isAdult(mark);

function isCoderSchoolStaff(person) {
	if (person.company === 'coderschool') {
		console.log(`Works at coderschool`);
	} else {
		console.log(`Nope!`);
	}
}
isCoderSchoolStaff(mark);
// OBJECT EXERCISE ///////////////////////////////////////
//
//
const charles = {};
charles.company = `coderschool staff`;
isCoderSchoolStaff(charles);
//
function describePerson(person) {
	console.log(
		`This is ${person.fullName}.  ${person.fullName} is ${person.age} years old. They work at ${person.companies}`
	);
}
describePerson(mark);
//HELP HERE - HOW TO GET SECOND VALUE FROM OBJECT VALUE
console.log(charles);
console.log(charles.company);
console.log(charles.company.split().slice()[1]);
//
// AGE ONE YEAR FUNCITON
function ageOneYear(person) {
	let newAge = person.age + 1;
	console.log(newAge);
}
ageOneYear(mark);
// GET BIRTH YEAR
function getBirthYear(person) {
	let current = person.age;
	let year = new Date().getFullYear();
	let birthYear = year - current;
	console.log(birthYear);
}
getBirthYear(mark);
// LOGLASTNAME
function logLastName(person) {
	let name = person.fullName.split(' ');
	console.log(name[1]);
}
logLastName(mark);
//GET INTITALS
function initials(person) {
	let firstName = person.fullName.split(' ')[0];
	let lastName = person.fullName.split(' ')[1];
	let firstNameLetter = firstName.charAt();
	let LastNameLetter = lastName.charAt();
	console.log(`The initials are ${firstNameLetter} ${LastNameLetter}`);
}
initials(mark);
// OBJECT METHODS //////////////////////////////////////////////
var userA = {
	id: 123456,
	name: 'Peter Parker',
	email: 'peter.parker@gmail.com',
	role: 'student',
	courseId: 112233,
	age: 16,
	tasks: [
		{ name: 'Task 1', status: 'Done' },
		{ name: 'Task 2', status: 'Not Started' },
		{ name: 'Task 3', status: 'In Progress' },
		{ name: 'Task 4', status: 'Not Started' },
		{ name: 'Task 5', status: 'Done' },
		{ name: 'Task 6', status: 'In Progress' },
		{ name: 'Task 7', status: 'Not Started' },
		{ name: 'Task 8', status: 'Done' },
		{ name: 'Task 9', status: 'Done' },
		{ name: 'Task 10', status: 'In Progress' },
	],
};

let keys = Object.keys(userA);
let values = Object.values(userA);
console.log(`There are ${(keys.length + values.length) / 2} pairs`);

// function key() {
// 	for (let i = 0; i < keys.length; i++) {
// 		console.log(`${keys}`);
// 		for (let i = 0; i < values.length; i++) {
// 			console.log(`${values}`);
// 		}
// 	}
// }
// key();
//

function printKeys(xxx) {
	let listOfKeys = Object.keys(xxx);
	for (let i = 0; i < listOfKeys.length; i++) {
		const keyName = listOfKeys[i];
		console.log(`The value of ${keyName} is ${xxx[keyName]}`);
	}
}
printKeys(mark);
//HAS AN EMAIL ADDRESS
function hasEmail(xxx) {
	if (xxx.hasOwnProperty('email')) {
		console.log(`User has an Email`);
	} else {
		`Please input email`;
	}
}
hasEmail(userA);
//HAS AN AGE
function hasAge(xxx) {
	if (xxx.hasOwnProperty('age')) {
		console.log(`User has an age of ${xxx.age}`);
	} else {
		`Please input your age`;
	}
}
hasAge(userA);
// NESTED OBJECTS ////////////////////////////////////////////////////////
let data = {
	id: 123456,
	name: 'Peter Parker',
	email: 'peter.parker@gmail.com',
	role: 'student',
	courseId: 112233,
	age: 16,
	tasks: [
		{ name: 'Task 1', status: 'Done' },
		{ name: 'Task 2', status: 'Not Started' },
		{ name: 'Task 3', status: 'In Progress' },
		{ name: 'Task 4', status: 'Not Started' },
		{ name: 'Task 5', status: 'Done' },
		{ name: 'Task 6', status: 'In Progress' },
		{ name: 'Task 7', status: 'Not Started' },
		{ name: 'Task 8', status: 'Done' },
		{ name: 'Task 9', status: 'Done' },
		{ name: 'Task 10', status: 'In Progress' },
	],
};
//CHECK TO SEE IF NOT STARTED
function listNotStarted(data) {
	let listOfTasks = data.tasks;
	listOfTasks.forEach(function (element) {
		if (element.status === 'Not Started') {
			console.log(`${element.name} is ${element.status}`);
		}
	});
}
// listNotStarted(data);
// OPTION 2 with For Lopp
function secondOption(data) {
	let listOfTasks = data.tasks;
	for (let i = 0; i < listOfTasks.length; i++) {
		const element = listOfTasks[i];
		if (element.status === 'Not Started') {
			console.log(`${element.name} is ${element.status}`);
		}
	}
}
// secondOption(data);

// PRINT OFF A LIST OF TASKS and put them into CATAGORIES
function formattedTasks(data) {
	let listOfTasks = data.tasks;
	console.log(`Not Started`);
	listOfTasks.forEach(function (element) {
		if (element.status === 'Not Started') {
			console.log(element.lastName);
		}
	});
	console.log(`Done`);
	listOfTasks.forEach(function (element) {
		if (element.status === 'Done') {
			console.log(element.name);
		}
	});
	console.log(`In Progress`);
	listOfTasks.forEach(function (element) {
		if (element.status === 'In Progress') {
			console.log(element.name);
		}
	});
}
formattedTasks(data);
//
//
//YOU WENT OVER THIS REALLY FAST, IT WAS A BIT CONFUSING WHERE EVERYTHING WENT AND WHY

//This is a good function, maybe you could explain the thought process and why after class
function generateFakeTask(n) {
	let response = [];
	let taskNumber = n;
	console.log(taskNumber);
	let statusOption = ['Not Started', 'Done', 'In Progress'];
	for (let i = 0; i < n; i++) {
		let randomChoice = statusOption[Math.floor(Math.random() * 3)];

		let singleTask = { name: `Task ${i + 1}`, status: randomChoice };
		response.push(singleTask);
		console.log(singleTask);
	}
	console.log(response);
	return response;
}
// console.log(generateFakeTask(3));
let toBeAdded = generateFakeTask(10);
data.tasks = toBeAdded;
// console.log(data);
formattedTasks(data);
//
// GENERATE A PASSWORD//////////////////////////////////////////////////////////
//
let characters =
	'encinei2rncnoscne9876VEVEVEv5evrvEVe3wg3445mmhmipZAZXECDrvrthntunvDSCWCFREGET';
function getRandomChar(characters) {
	let char = characters[Math.floor(Math.random() * characters.length)];
	return char;
}

function getRandomString(length) {
	let res = '';
	for (let i = 0; i < length; i++) {
		let newChar = getRandomChar(characters);
		res += newChar;
	}
	return res;
}
console.log(getRandomString(10));
