const themeSwitch = document.querySelector('#switch');

/**
 * Toggles between light and dark theme styles.
 */
if (themeSwitch) {
	themeSwitch.addEventListener('click', () => {
		document.body.classList.toggle('dark');
		themeSwitch.classList.toggle('active');
	});
}
