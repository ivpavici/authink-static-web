/*

     ___      __    __  .___________. __    __   __  .__   __.  __  ___ 
    /   \    |  |  |  | |           ||  |  |  | |  | |  \ |  | |  |/  / 
   /  ^  \   |  |  |  | `---|  |----`|  |__|  | |  | |   \|  | |  '  /  
  /  /_\  \  |  |  |  |     |  |     |   __   | |  | |  . `  | |    <   
 /  _____  \ |  `--'  |     |  |     |  |  |  | |  | |  |\   | |  .  \  
/__/     \__\ \______/      |__|     |__|  |__| |__| |__| \__| |__|\__\ 


               Developed in April, 2013. (c) AuThink Team

*/

var didYouKnowCompleted = false;
var usageCompleted = false;

$(document).ready(function() {
	setTimeout(function() {
		$('#home-top-circle').addClass('full');
	}, 200);

	setTimeout(function() {
		$('#home-top-line').addClass('full');
	}, 500);

	setTimeout(function() {
		$('#home-top-heading').fadeIn(100);
	}, 1000);

	setTimeout(function() {
		$('#home-top-text').slideDown(100);
	}, 1200);

	setTimeout(function() {
		$('#home-did-you-know').slideDown(200);
	}, 1400);

	setTimeout(function() {
		$('#home-usage').slideDown(200);
	}, 1500);
});

$(window).scroll(function () {
	var scrollAmount = $(window).scrollTop();

	if(scrollAmount >= 300 && didYouKnowCompleted == false) {
		fireDidYouKnowAnimation();
	}

	if(scrollAmount >= 500 && usageCompleted == false) {
		fireUsageAnimation();
	}
});

function fireDidYouKnowAnimation() {
	didYouKnowCompleted = true;

	$('#home-did-you-know-world').animate({
		left: 20
	}, 500, function() {
		$('#home-did-you-know-world-amount').fadeIn(100);
	});

	setTimeout(function() {
		var worldAmountInterval = setInterval(function() {
			var worldAmount = parseInt($('#home-did-you-know-world-amount span').html());

			if(worldAmount < 67) {
				worldAmount++;
			} else {
				clearInterval(worldAmountInterval);
			}
			
			$('#home-did-you-know-world-amount span').html(worldAmount);

		}, 5);
	}, 500);

	setTimeout(function() {
		$('#home-did-you-know-world-text').fadeIn(200);
	}, 800);

	setTimeout(function() {
		$('#home-did-you-know-clock').animate({
			left: 380
		}, 500, function() {
			$('#home-did-you-know-clock-amount').fadeIn(100);
		});
	}, 1400);

	setTimeout(function() {
		var clockAmountInterval = setInterval(function() {
			var clockAmount = parseInt($('#home-did-you-know-clock-amount span').html());

			if(clockAmount < 20) {
				clockAmount++;
			} else {
				clearInterval(clockAmountInterval);
			}
			
			$('#home-did-you-know-clock-amount span').html(clockAmount);

		}, 10);
	}, 2000);

	setTimeout(function() {
		$('#home-did-you-know-clock-text-up').fadeIn(200);
		$('#home-did-you-know-clock-text-down').fadeIn(300);
	}, 2400);

	setTimeout(function() {
		$('#home-did-you-know-boys').animate({
			top: 95
		}, 500, function() {
			$('#home-did-you-know-boys-text').slideDown(200);
		});
	}, 3000);
}

function fireUsageAnimation() {
	usageCompleted = true;

	setTimeout(function() {
		$('#home-usage-children-container').slideDown(300);
	}, 200);

	setTimeout(function() {
		$('#home-usage-teachers-container').slideDown(300);
	}, 300);

	setTimeout(function() {
		$('#home-usage-parents-container').slideDown(300);
	}, 400);
}