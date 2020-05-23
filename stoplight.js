document.getElementById('stop').onclick = goRed;
document.getElementById('go').onclick = goGreen; 
document.getElementById('slow').onclick = goYellow;
document.getElementById('caution').addEventListener('click', () => {
	blink();
});

let middle = document.getElementById('middle');
let bottom = document.getElementById('bottom');
let blinking;

function goRed() {
	reset();
	document.getElementById('top').className = 'onRed';
};

function goYellow() {
	reset();
	middle.className = 'onYellow';
};

function goGreen() {
	reset();
	bottom.className = 'onGreen';
};

function blink(){
	reset();
	blinking = setInterval(() => {
		middle.classList.toggle('onYellow');
	}, 1000);
};

function reset() {
	document.getElementById('top').className = 'onOff';
	middle.className = 'onOff';
	bottom.className = 'onOff';
	clearInterval(blinking);
};
// 