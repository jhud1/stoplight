document.getElementById('stop').onclick = goRed;
document.getElementById('go').onclick = goGreen; 
document.getElementById('slow').onclick = goYellow;
document.getElementById('caution').onclick = warning;

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
	let middle = document.getElementById('middle');
	middle.style.backgroundColor = '#FFFF00';
	if(middle.style.backgroundColor === '#FFFF00'){
		setTimeout(function(){middle.style.backgroundColor = '#A0522D'}, 1000)
	} else {
		setTimeout(function(){middle.style.backgroundColor = '#FFFF00'}, 1000)
	}
};

function reset() {
	document.getElementById('top').style.backgroundColor = '#A0522D';
	document.getElementById('middle').style.backgroundColor = '#A0522D';
	document.getElementById("bottom").style.backgroundColor = '#A0522D';
}