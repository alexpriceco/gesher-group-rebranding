//function to move between different member profiles
function memberSwitch(section) {
	$('#'+section).addClass('selected-member').siblings().removeClass('selected-member');

	console.log('#' + section + '_section');

   $('#' + section + '_section').removeClass('hidden fadeOut').addClass('selected-member-desc fadeIn').bind('oanimationend animationend webkitAnimationEnd', function() {
      $('#' + section + '_section').removeClass('fadeIn').siblings().addClass('hidden');
   });
   $('#' + section + '_section').siblings().addClass('fadeOut').removeClass('selected-member-desc');
	$('.absolute-container').height($('.selected-member-desc').outerHeight());
}


$(document).ready(function() {

	//navigation
	$('.nav_button').click(function() {
		$('nav').addClass('fadeIn').removeClass('fadeOut').toggle();
	});

	$('.close_nav').click(function() {
		$('nav').addClass('fadeOut').removeClass('fadeIn');
		
		setTimeout(function() {
			$('nav').toggle();
		}, 2000);
	});


	//modals
	$('.launch_modal.call').click(function() {
		$('.blur-container').addClass('fadeIn').removeClass('fadeOut').toggle(true);
		$('.modal.call').addClass('fadeIn').removeClass('fadeOut').toggle(true);
	});
	$('.launch_modal.email').click(function() {
		$('.blur-container').addClass('fadeIn').removeClass('fadeOut').toggle(true);
		$('.modal.email').addClass('fadeIn').removeClass('fadeOut').toggle(true);
	});
	$('.launch_modal.mail').click(function() {
		$('.blur-container').addClass('fadeIn').removeClass('fadeOut').toggle(true);
		$('.modal.mail').addClass('fadeIn').removeClass('fadeOut').toggle(true);
	});
	$('.blur-container').click(function() {
		$('.blur-container').removeClass('fadeIn').addClass('fadeOut').toggle(false);
		$('.modal.call').removeClass('fadeIn').addClass('fadeOut').toggle(false);
		$('.modal.email').removeClass('fadeIn').addClass('fadeOut').toggle(false);
		$('.modal.mail').removeClass('fadeIn').addClass('fadeOut').toggle(false);
	});


	//board selection
	$('.member').click(function() {
		memberSwitch(this.id)
	})
	if($('.absolute-container')!==null) {
		$('.absolute-container').height($('.selected-member-desc').outerHeight());
	}


});