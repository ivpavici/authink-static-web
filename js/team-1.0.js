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
	$('.home-team-member-picture').hover(function() {
		$(this).find('img').addClass('full');
	}, function() {
		$(this).find('img').removeClass('full');
	})
});