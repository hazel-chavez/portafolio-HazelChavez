/**
 * Mobile menu state flag:
 * 1 => closed, 0 => open.
 * @type {0 | 1}
 */
let menuState = 1;

/**
 * Initializes the mobile hamburger menu behavior.
 */
function initializeMobileMenu() {
	$('.btn-menu').on('click', function () {
		if (menuState === 1) {
			$('nav').animate({ left: '0' });
			menuState = 0;
			return;
		}

		$('nav').animate({ left: '-100%' });
		menuState = 1;
	});
}

$(document).ready(initializeMobileMenu);
