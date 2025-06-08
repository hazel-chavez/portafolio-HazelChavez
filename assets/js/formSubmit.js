//wait until all the Html this content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
	//create a varible and get the element  with id "form"
	const form = document.getElementById('form');
	//listen for the 'submit' on the form
	form.addEventListener('submit', function (e) {
		e.preventDefault(); // prevent the defaul form submission(stops automatic sending and page reload)
		//show a success messaje using sweetAlert2
		Swal.fire({
			icon: 'success',
			title: 'Messaje sending', //title of the alert
			html: 'Thanks for <b>contacting</b> me.<br>¡I’ll <u>reply soon!</u>', //main messaje
			draggable: true,
			confirmButtonText: 'Got it', // text on the confirmation button
			footer: '<span style="font-size: 12px;">Hazel Portfolio</span>',
		}).then(() => {
			form.submit(); // After the alert is closed, submit the form to formSubmit
		});
	});
});
