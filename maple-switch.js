// maple-switch.js

// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
	// Get the thumb element using a correct selector
	const thumb = document.querySelector('.maple-slider:before');

	// Check if the thumb element is found
	if (thumb) {
		// Add event listener for mouse down event on the thumb
		thumb.addEventListener('mousedown', handleMouseDown);
	} else {
		console.error('Thumb element not found.');
	}
});

// Function to handle mouse down event
const handleMouseDown = (event) => {
	// Add your code to handle mouse down event here
};