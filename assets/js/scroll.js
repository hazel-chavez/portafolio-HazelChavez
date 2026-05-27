const scrollTopButton = document.querySelector('.fa.fa-arrow-circle-up.fa-lg');

/**
 * Smoothly scrolls the page to the top.
 */
function scrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

if (scrollTopButton) {
	scrollTopButton.addEventListener('click', scrollToTop);
}
