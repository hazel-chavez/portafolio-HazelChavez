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
	form.addEventListener('submit', function (e) {
		e.preventDefault();

		Swal.fire({
			icon: 'success',
			title: 'Message sending',
			html: 'Thanks for <b>contacting</b> me.<br>¡I’ll <u>reply soon!</u>',
			draggable: true,
			confirmButtonText: 'Got it',
			footer: '<span style="font-size: 12px;">Hazel Portfolio</span>',
		}).then(() => {
			form.submit();
		});
	});
});
