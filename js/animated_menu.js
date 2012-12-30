$(document).ready(function(){

	

	//When mouse rolls over
	$('li').mouseover(function(){
		//var dynHeight = $(this).children()[1].offsetHeight + 15;
		$(this).stop().animate({height: '150px'},
		{queue:false, duration:600, easing:'easeOutBounce'})
	});

	//When mouse is removed
	$('li').mouseout(function(){
		$(this).stop().animate({height:'50px'},
		{queue:false, duration:600, easing:'easeOutBounce'})
	});
})