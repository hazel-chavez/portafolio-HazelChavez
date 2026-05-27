/**
 * Reads the current language from the URL query string (`?lang=es|en`).
 * Falls back to Spanish (`es`) when the value is missing or invalid.
 * @returns {"es" | "en"}
 */
function getLanguageFromURL() {
	const params = new URLSearchParams(window.location.search);
	const lang = params.get('lang');
	return lang === 'es' || lang === 'en' ? lang : 'es';
}

let currentLang = getLanguageFromURL();

/**
 * Loads translation data and applies text to all `[data-i18n]` elements.
 *
 * Learning note:
 * - Use `textContent` for plain text.
 * - Use `innerHTML` only when you intentionally inject markup.
 *
 * @param {"es" | "en"} lang Language to apply.
 * @returns {Promise<void>}
 */
function loadLanguage(lang) {
	return fetch('/json/lang.json')
		.then((response) => response.json())
		.then((data) => {
			const texts = document.querySelectorAll('[data-i18n]');

			texts.forEach((element) => {
				const key = element.getAttribute('data-i18n');
				const value = key && data?.[lang]?.[key];

				if (!value) {
					return;
				}

				if (value.includes('__name__')) {
					element.innerHTML = value.replace(
						'__name__',
						'<span class="title-content">Hazel Chavez</span>',
					);
					return;
				}

				element.textContent = value;
			});

			const currentLangElement = document.getElementById('currentLang');
			if (currentLangElement) {
				currentLangElement.textContent = lang.toUpperCase();
			}
		})
		.catch((error) => {
			console.error('Error loading language file:', error);
		});
}

/**
 * Toggles the language dropdown visibility.
 */
function toggleLanguageDropdown() {
	const dropdown = document.getElementById('langDropdown');
	if (dropdown) {
		dropdown.classList.toggle('show');
	}
}

/**
 * Changes the active language, updates the URL without reloading,
 * and closes the language dropdown.
 * @param {"es" | "en"} lang Selected language.
 */
function changeLanguage(lang) {
	currentLang = lang;
	loadLanguage(lang);

	const url = new URL(window.location.href);
	url.searchParams.set('lang', lang);
	window.history.pushState({}, '', url);

	toggleLanguageDropdown();
}

/**
 * Wires language-related UI events after the DOM is ready.
 */
document.addEventListener('DOMContentLoaded', () => {
	const toggleBtn = document.getElementById('langToggle');
	const langOptions = document.querySelectorAll('.lang-option');
	const dropdown = document.getElementById('langDropdown');

	loadLanguage(currentLang);

	if (toggleBtn) {
		toggleBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			toggleLanguageDropdown();
		});
	}

	langOptions.forEach((option) => {
		option.addEventListener('click', (e) => {
			e.preventDefault();
			changeLanguage(option.dataset.lang);
		});
	});

	document.addEventListener('click', () => {
		if (dropdown) {
			dropdown.classList.remove('show');
		}
	});
});
