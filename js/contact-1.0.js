/*

     ___      __    __  .___________. __    __   __  .__   __.  __  ___ 
    /   \    |  |  |  | |           ||  |  |  | |  | |  \ |  | |  |/  / 
   /  ^  \   |  |  |  | `---|  |----`|  |__|  | |  | |   \|  | |  '  /  
  /  /_\  \  |  |  |  |     |  |     |   __   | |  | |  . `  | |    <   
 /  _____  \ |  `--'  |     |  |     |  |  |  | |  | |  |\   | |  .  \  
/__/     \__\ \______/      |__|     |__|  |__| |__| |__| \__| |__|\__\ 


               Developed in April, 2013. (c) AuThink Team

*/

$(document).ready(function() {
	$('.home-contact-form-field, .home-contact-form-textarea').focus(function() {
		var originalValue = $(this).attr('rel');
		var currentValue = $(this).val();

		if(currentValue == originalValue) {
			$(this).val('');
		}

		$(this).css('border', '1px solid #ddd');
		$(this).css('box-shadow', 'none');
		$(this).css('color', '#444');
	});

	$('.home-contact-form-field, .home-contact-form-textarea').blur(function() {
		var originalValue = $(this).attr('rel');
		var currentValue = $(this).val();

		if(currentValue == '') {
			$(this).val(originalValue);
			$(this).css('color', '#ccc');
		}
	});

	$('#home-contact-form-send').on('click', function() {
		var formOK = true;

		var nameValue = $('#home-contact-form-field-name').val();
		var nameOriginal = $('#home-contact-form-field-name').attr('rel');

		var emailValue = $('#home-contact-form-field-email').val();
		var emailOriginal = $('#home-contact-form-field-email').attr('rel');

		var messageValue = $('#home-contact-form-field-message').val();
		var messageOriginal = $('#home-contact-form-field-message').attr('rel');

		if(nameValue == "" || nameValue == nameOriginal) {
			$('#home-contact-form-field-name').css('border', '1px solid crimson');
			$('#home-contact-form-field-name').css('box-shadow', '0px 0px 3px red');

			formOK = false;
		}

		if(emailValue == "" || emailValue == emailOriginal) {
			$('#home-contact-form-field-email').css('border', '1px solid crimson');
			$('#home-contact-form-field-email').css('box-shadow', '0px 0px 3px red');

			formOK = false;
		}

		if(!validateEmail(emailValue)) {
			$('#home-contact-form-field-email').css('border', '1px solid crimson');
			$('#home-contact-form-field-email').css('box-shadow', '0px 0px 3px red');

			formOK = false;
		}

		if(messageValue == "" || messageValue == messageOriginal) {
			$('#home-contact-form-field-message').css('border', '1px solid crimson');
			$('#home-contact-form-field-message').css('box-shadow', '0px 0px 3px red');

			formOK = false;
		}

		if(formOK) {
			$.ajax({
				type: 'POST',
				url: 'contact.php',
				dataType: 'json',
				data: {
					ajaxFunction: 'sendMail',
					name: nameValue,
					email: emailValue,
					message: messageValue
				},
				success: function(data) {
				}
			});

			$('#overlay').fadeIn(200);

			setTimeout(function() {
				$('#overlay-success-mail').addClass('full');
			}, 500);

			setTimeout(function() {
				$('#overlay-success-mail').animate({
					marginTop: '+=40px'
				}, 100);
			}, 1000);

			setTimeout(function() {
				$('#overlay-success-mail').animate({
					top: '-200px'
				}, 100);
			}, 1200);

			setTimeout(function() {
				$('#overlay-success-thumb').addClass('full');
			}, 2000);

			setTimeout(function() {
				$('#overlay-success-thumb').removeClass('full');
			}, 4200);

			setTimeout(function() {
				$('#home-contact').fadeOut(100);
				$('#home-contact-form').fadeOut(100);
				$('#home-contact-form-thanks').delay(100).fadeIn(100);
				$('#overlay').delay(200).fadeOut(200);
			}, 4500);
		}
	});
});

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 