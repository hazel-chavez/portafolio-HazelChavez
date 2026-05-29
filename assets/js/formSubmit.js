document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');

	if (!form) {
		return;
	}

	/**
	 * Shows visual feedback before the form is finally submitted.
	 *
	 * Learning note:
	 * `preventDefault()` stops the browser's default submit behavior,
	 * so we can run custom logic (SweetAlert) first.
	 * @param {SubmitEvent} e
	 */
	form.addEventListener('submit', async function (e) {
		e.preventDefault();

		const lang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'es';
		const translations = window.translate
			? (key) => window.translate(key, lang)
			: (key) => Promise.resolve(key);

		Swal.fire({
			icon: 'success',
			title: await translations('form_success_title'),
			html: await translations('form_success_message'),
			draggable: true,
			confirmButtonText: await translations('form_success_confirm'),
			footer: '<span style="font-size: 12px;">Hazel Portfolio</span>',
		}).then(() => {
			form.submit();
		});
	});
});
