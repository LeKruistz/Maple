// Make the switch draggable
let switchEl = document.getElementById('draggable-switch');
let isDragging = false;
let startX, offsetX;

switchEl.addEventListener('mousedown', (e) => {
	isDragging = true;
	startX = e.clientX;
	offsetX = switchEl.offsetLeft;
});

document.addEventListener('mouseup', () => {
	isDragging = false;
});

document.addEventListener('mousemove', (e) => {
	if (isDragging) {
		let newLeft = offsetX + e.clientX - startX;
		if (newLeft >= 0 && newLeft <= document.body.clientWidth - switchEl.offsetWidth) {
			switchEl.style.left = newLeft + 'px';
		}
	}
});