// function contextSwitch(section) {
//    contextSwitch: {
//       previouslyActive = $('.active').html();
//       $('#' + section).addClass('active').siblings().removeClass('active');

//       if (previouslyActive == section) {
//          break contextSwitch;
//       }

//       $('.absolute-container').height($('#' + section + '_section').outerHeight());

//       if (section == "join") {
//          $('#' + section + '_section').removeClass('hidden fadeInLeft fadeOutRight fadeOutLeft').addClass('fadeInLeft').bind('oanimationend animationend webkitAnimationEnd', function() {
//             $('#' + section + '_section').removeClass('fadeInLeft');
//          });
//          $('#' + previouslyActive + '_section').removeClass('fadeInRight, fadeInLeft').addClass('fadeOutRight').bind('oanimationend animationend webkitAnimationEnd', function() {
//             $('#' + previouslyActive + '_section').addClass('hidden').removeClass('fadeInRight fadeInLeft fadeOutRight');
//          });
//       }
//       if (section == "sponsor") {
//          $('.absolute-container').height($('#sponsor_section').outerHeight());

//          if (previouslyActive == 'join') {
//             $('#' + section + '_section').removeClass('hidden fadeInLeft fadeOutRight fadeOutLeft').addClass('fadeInRight').bind('oanimationend animationend webkitAnimationEnd', function() {
//                $('#' + section + '_section').removeClass('fadeInRight');
//             });
//             $('#' + previouslyActive + '_section').removeClass('fadeInRight, fadeInLeft').addClass('fadeOutLeft').bind('oanimationend animationend webkitAnimationEnd', function() {
//                $('#' + previouslyActive + '_section').addClass('hidden').removeClass('fadeInRight fadeInLeft fadeOutLeft');
//             });
//          } else {
//             $('#' + section + '_section').removeClass('hidden fadeInRight fadeOutRight fadeOutLeft').addClass('fadeInLeft').bind('oanimationend animationend webkitAnimationEnd', function() {
//                $('#' + section + '_section').removeClass('fadeInLeft');
//             });
//             $('#' + previouslyActive + '_section').removeClass('fadeInRight, fadeInLeft').addClass('fadeOutRight').bind('oanimationend animationend webkitAnimationEnd', function() {
//                $('#' + previouslyActive + '_section').addClass('hidden').removeClass('fadeInRight fadeInLeft fadeOutRight');
//             });
//          }
//       }
//       if (section == "hire") {
//          $('#' + section + '_section').removeClass('hidden fadeInLeft fadeOutRight fadeOutLeft').addClass('fadeInRight').bind('oanimationend animationend webkitAnimationEnd', function() {
//             $('#' + section + '_section').removeClass('fadeInRight');
//          });
//          $('#' + previouslyActive + '_section').removeClass('fadeInRight, fadeInLeft').addClass('fadeOutLeft').bind('oanimationend animationend webkitAnimationEnd', function() {
//             $('#' + previouslyActive + '_section').addClass('hidden').removeClass('fadeInRight fadeInLeft fadeOutLeft');
//          });
//       }
//    }
// }

$(document).ready(function() {

   //displays navigated to element
   if((window.location.pathname.split('/')[1]=='involve.html')) {
        $('#' + window.location.href.split('#')[1] + '_section').removeClass('hidden');
        $('#' + window.location.href.split('#')[1]).addClass('active');
        previouslyActive = $('.active').html();
        $('.absolute-container').height($('#' + previouslyActive + '_section').outerHeight());
    }


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
   if ((window.location.pathname.split('/')[1]=='involve.html')) {
       if ((window.location.href.split('#')[1]).match(/^(join|support|hire)$/)) {
          $('.sub_menu a').click(function() {
             contextSwitch(this.id.split('_')[1]);
             $('nav').addClass('fadeOut').removeClass('fadeIn');
             setTimeout(function() {
                $('nav').toggle();
             }, 2000);
          });
       }
    }
    $('.submenu li').click(function() {
        contextSwitch(this.id);
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
});