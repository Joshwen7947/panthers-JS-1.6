// alert(`test`);
console.log('Hello JS!');

function changeFirstBox() {
	console.log('Change My first Box Treo March 30');
	document.getElementById('change-text').innerHTML = 'Treo Change Text!';
}

setTimeout(changeFirstBox, 3000);
//
let count = 0;

function changeSecondBox() {
	// count++
	count = count + 1;
	document.getElementById('change-count').innerHTML = count;
}

setInterval(changeSecondBox, 1000);
//
let clickCount = 0;

function incrementOnClick() {
	clickCount++;
	document.getElementById('change-click').innerHTML = clickCount;
}

document
	.getElementById('change-click')
	.addEventListener('click', incrementOnClick);
// ////////////////////////////////////////////////////////////////////////////////////////////////
let hoverCount = 0;
function changeHover() {
	hoverCount++;
	document.getElementById(`change-hover`).innerHTML = hoverCount;
}
document
	.getElementById(`change-hover`)
	.addEventListener(`mouseover`, changeHover);

function changeColor() {
	let box = document.getElementById(`change-color`);
	var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
	box.style.backgroundColor = randomColor;
}
setInterval(changeColor, 3000);

// HE LOVES ME, HE LOVES ME NOT
function love() {
	let random = Math.floor(Math.random() * 2);
	console.log(random);
	document
		.getElementById(`change-he-loves-me`)
		.addEventListener(`click`, function () {
			if (random === 0) {
				console.log(`Yes`);
				document.getElementById(`change-he-loves-me`).innerHTML = `Yes`;
			} else if (random === 1) {
				console.log(`No`);
				document.getElementById(`change-he-loves-me`).innerHTML = `No`;
			}
		});
}
document.getElementById(`change-he-loves-me`).addEventListener(`click`, love);
// SHOW TIME INSIDE BOX WHEN CLICKED
function showTime() {
	let time = new Date();
	document.getElementById(`change-to-current-date`).innerHTML = time;
}
document
	.getElementById(`change-to-current-date`)
	.addEventListener(`click`, showTime);
// SHOW WIDTH & HEIGHT WHEN SIZED
function windowResize() {
	let width = window.innerWidth;
	let height = window.innerHeight;
	let widthBox = document.getElementById(`change-to-current-width`);
	let heightBox = document.getElementById(`change-to-current-height`);
	widthBox.innerHTML = width;
	heightBox.innerHTML = height;
}
window.addEventListener(`resize`, windowResize);
// ADD NEW LI ELEMENT
let addList = document.getElementById(`add-list-item`);
function handler() {
	let listItem = document.createElement(`LI`);
	listItem.innerHTML = 'Type Here';
	addList.appendChild(listItem);
}
addList.addEventListener(`click`, handler);

// SHOW CURRENT URL
function getURL() {
	document.getElementById(`change-to-url`).innerHTML = window.location.href;
}
document.getElementById(`change-to-url`).addEventListener(`click`, getURL);
//TYPE WRITER EFFECT
let newText = document.getElementById(`Type-When-Clicked`);
function handleTyping() {
	let text = 'Typing from JS';
	let i = 0;
	let temp = '';
	function typing() {
		temp += text[i];
		i++;
		newText.innerHTML = temp;
		if (i > text.length - 1) {
			i = 0;
			temp = '';
			return;
		}
	}
	setInterval(typing, 500);
}
newText.addEventListener(`click`, handleTyping);
