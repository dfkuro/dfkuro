$(document).ready(function(){


	var W = $(window).width();
	var H = $(window).height();

	$('#bg').css({width:'100%',height:'100%', backgroundColor:'white'});
	$('#bg_img').css({width:'100%',height:'100%',zindex:'-3'}).hide().fadeIn(2500);
	var bg = 'rgba(0,0,0,.86)';

	$('#menu_container').css({
		height: '0px',
		backgroundColor: bg,
		opacity: '.3'
	});

	$('#main_text').hide()
	
	function menu(){
		$('#menu_container').stop().animate({height: '96%'},
		{queue:true, duration:2000, easing:'easeOutBounce'});

		$('#menu_container').hover(function(){
			$(this).animate({opacity:'1'}, {queue:false, duration:700});
		},
		function(){
			$(this).animate({opacity:'.3'}, {queue:false, duration:700});
		});


		$('#sidebarmenu1 > li').each(function(index){
		if ( $(this).children('ul').length > 0 ) {
			$(this).hover(function(){

				$(this).children('ul')
				.css({display:"block",visibility:'visible',left:'0px',width:'150px',opacity:'.0'})
				.animate({left:'150px',opacity:'1'}, {queue:false, duration:700, easing:'easeOutBounce'});

			}, function(){
				$(this).children('ul')
				.animate({left:'150px',opacity:'.0'},{queue:false, duration:700, easing:'swing'});
			});
		}

		setTimeout(function(){$('#main_text').fadeIn(2000)},3000);

	});
	}
	setTimeout(menu,3500);
	setTimeout(function(){$('#sidebarmenu1').hide().css({visibility:'visible'}).fadeIn(); return false;},6000);

	// initializating content 

	$('#content, #close_icon').hide();

	$.ajaxSetup ({
    // Disable caching of AJAX responses
    	cache: false
	});

	$('#about_me').click(function(){
		$('#page_content').niceScroll().remove();
		$('#wrapper').empty();
		$('#content').hide().css({width:'0%',left: '35%',overflow: 'hidden'});
		$('#content').fadeIn('slow').animate({width:'45%'},{queue:false, duration:700, easing:'swing'});
		$('#close_icon').hide();
		setTimeout(function(){$('#wrapper').load('about.html', function(){
			$('#wrapper').niceScroll().resize();
			$('#wrapper').hide().fadeIn(1000);
		})},1000);

		showDelete();
		return false;
	});

	$('#contact').click(function(){
		$('#page_content').niceScroll().remove();
		$('#wrapper').empty();
		$('#content').hide().css({width:'0%',left: '35%',overflow: 'hidden'});
		$('#content').fadeIn('slow').animate({width:'45%'},{queue:false, duration:700, easing:'swing'});
		$('#close_icon').hide();
		setTimeout(function(){$('#wrapper').load('contact.html', function(){
			$('#wrapper').hide().fadeIn(1000);
			$('#wrapper').niceScroll().resize();
			setTimeout(function(){
				$('.linkedin').animate({left:'0px'},{queue:false, duration:700, easing:'easeOutBack'});
				$('.facebook').animate({left:'203px'},{queue:false, duration:800, easing:'easeOutBack'});
				$('.twitter').animate({left:'411px'},{queue:false, duration:900, easing:'easeOutBack'});
			},1500);
		})},1500);
		showDelete();
		/*setTimeout(function(){
		$('#linkedin').animate({left:'0px'},{queue:false, duration:700, easing:'swing'/*},function(){
			$('#facebook').animate({left:'203px'},{queue:false, duration:700, easing:'swing'},function(){
				$('#twitter').animate({left:'391px'},{queue:false, duration:700, easing:'swing'});
			});
		})},5000);*/

		return false;
	});

	$('#illustrations').click(function(){
		$('#wrapper').niceScroll().remove();
		$('#wrapper').empty();
		$('#content').hide().css({width:'0%',left: '25%',overflow: 'auto'});
		$('#content').fadeIn('slow').animate({width:'65%'},{queue:false, duration:700, easing:'swing'});
		$('#close_icon').hide();

		setTimeout(function(){$('#deviantart').animate({top:'5%'},{queue:false, duration:1000, easing:'easeOutBounce'})},2000);
		setTimeout(function(){$('#pixiv').animate({top:'5%'},{queue:false, duration:1000, easing:'easeOutBounce'})},2500);

		setTimeout(function(){$('#wrapper').load('illustrations.html', function(){
			$('#wrapper').niceScroll();

			$(".fancybox").fancybox({
		    	openEffect	: 'elastic',
		    	closeEffect	: 'elastic',

		    	helpers : {
		    		title : {
		    			type : 'over'
		    		}
		    	}
		    });

			$('#wrapper').hide().fadeIn(1000);
		})},1000);

		showDelete();
		return false;
	});

	$('#close_icon').click(function(){
		$('#page_content').niceScroll().remove();
		$('#wrapper').niceScroll().remove();
		$('#wrapper').empty();
		$('#content').fadeOut();
	});

	function showDelete(){
		setTimeout(function(){$('#close_icon').fadeIn()},1500);
	}


	return false;
});




