/**
 * Initializes AOS (Animate On Scroll) when the library is available.
 */
document.addEventListener('DOMContentLoaded', function () {
	if (window.AOS) {
		AOS.init({
			duration: 700,
			easing: 'ease-out-cubic',
			once: true,
			offset: 120,
			delay: 0,
		});
	} else {
		console.warn('AOS is not loaded. Check the CDN reference in index.html.');
	}
});
