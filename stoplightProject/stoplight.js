document.getElementById('stop').onclick = goRed;
document.getElementById('go').onclick = goGreen; 
document.getElementById('slow').onclick = goYellow;
document.getElementById('caution').addEventListener('click', () => {
	goYellow();
	blink();
});

let middle = document.getElementById('middle');

function goRed() {
	reset();
	document.getElementById('top').style.backgroundColor = '#FF0000';
};

function goYellow() {
	reset();
	document.getElementById('middle').style.backgroundColor = '#FFFF00';
};

function goGreen() {
	reset();
	document.getElementById('bottom').style.backgroundColor = '#7FFF00';
};

function warning() {
	reset();
	middle.style.backgroundColor = '#FFFF00';
};

function blink(){
	setInterval(() => {document.getElementById('middle').style.backgroundColor = '#A0522D'}, 1000);
	console.log('blink is working');
}

function reset() {
	document.getElementById('top').style.backgroundColor = '#A0522D';
	document.getElementById('middle').style.backgroundColor = '#A0522D';
	document.getElementById("bottom").style.backgroundColor = '#A0522D';
}
