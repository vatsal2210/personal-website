	$(document).ready(function () {

		/* ======= jQuery form validator ======= */
		/* Ref: http://jqueryvalidation.org/documentation/ */
		$("#contact-form").validate({
			messages: {

				name: {
					required: 'Please enter your name', //You can customise this message
					maxlength: 15
				},
				email: {
					required: 'Please enter your email', //You can customise this message
					email: 'Please enter valid email'
				},
				message: {
					required: 'Please enter your message' //You can customise this message
				}
			}
		});

		$('#contact-form').submit(function (event) {
			event.preventDefault();

			var name = $("#name").val();
			var email = $("#email").val();
			var message = $("#message").val();

			var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			if (!emailReg.test(email) || name.length == '' || name.length == null || message.length == '' || message.length == null) {
				return false;
			} else {
				$("#msgLoading").show();

				$.ajax({
					type: "POST",
					url: "assets/forms/mail.php",
					data: "name=" + name + "&email=" + email + "&message=" + message,
					success: function (text) {
						if (text == "success") {
							$("#msgLoading").hide();
							$("#msgSuccess").show();
							$("#contact-form")[0].reset();
						} else {
							$("#msgLoading").hide();
							$("#msgError").show();
							return false;
						}
					}
				});


			}
		});
	});