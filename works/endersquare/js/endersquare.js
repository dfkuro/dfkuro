$(document).ready(function() {
       
	
	//$(".fancybox").fancybox();

	$(".fancybox").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'over'
    		}
    	}
    });


	$('#header').click(function() {
		$('#ontent').fadeToggle('slow');

	});

	$('body').mCustomScrollbar();


	$('#home_gallery').cycle({ 
    	fx:     'scrollHorz', 
    	speed:  'slow', 
    	timeout: 4000, 
    	next:   '#next',
    	prev: '#prev',
    	pause:   1
	});

	/*
	$('.menu a').click(function(e) {
	  // prevent the default action when a nav button link is clicked
	  e.preventDefault();

	  // ajax query to retrieve the HTML view without refreshing the page.
	  var target = $(this).text().toLowerCase();
	  if(target == "home"){
			$('body').load('endersquare/index'); 
	  }else {
	  	  $('#content').load('endersquare/'+target); 
	  	}
	});*/

	
});

(function($){
			$(window).load(function(){
				$("#content_1").mCustomScrollbar({
					scrollInertia: 1000,
					scrollButtons:{
						enable:true
					}
				});
			});
})(jQuery);


jQuery(document).ready(function(){
			// binds form submission and fields to the validation engine
			$("#email").validationEngine('attach');
			jQuery("#myform").validationEngine();
		});