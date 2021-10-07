// alert(`test`);
console.log('Hello JS!');

function changeFirstBox() {
	console.log('Change My first Box Treo March 30');
	document.getElementById('change-text').innerHTML = 'Treo Change Text!';
}

setTimeout(changeFirstBox, 3000);

let count = 0;

function changeSecondBox() {
	// count++
	count = count + 1;
	document.getElementById('change-count').innerHTML = count;
}

setInterval(changeSecondBox, 1000);

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
