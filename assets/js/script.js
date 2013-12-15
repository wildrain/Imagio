$(function(){
	var height = $(window).height(),
		width = $(window).width(),
		sponsorDesHeight = $('.sponsor-des').height(),
		clientHeight = sponsorDesHeight + 100,
		workContentHeight = height - 135;
	


	$('.bxslider').bxSlider({
	  pager:false,
	  nextSelector: '.slide-next',
	  prevSelector: '.slide-prev',
	  nextText: ' ',
	  prevText: ' ',
	  onSlideNext:function($slideElement, oldIndex, newIndex){
	  	var ref =$slideElement.attr('ref');
	  		//console.log(ref);
	  	$('#bg').attr('src',ref);	
	  },
	onSlidePrev:function($slideElement, oldIndex, newIndex){
	  	var ref =$slideElement.attr('ref');
	  		//console.log(ref);
	  	$('#bg').attr('src',ref);

	}
	});



	$('.video-slider').bxSlider({
		pager:false,
		video:true,

	    nextSelector: '.slide-next',
		prevSelector: '.slide-prev',
		nextText: ' ',
		prevText: ' ',
	});



	$('aside').css('height',height+'px');
	$('.content-imagio').css('height',workContentHeight+'px');	
	$('.content-imagio .client').css('top',clientHeight+'px');


	/*console.log('finding');*/
	/*$('aside').on('mouseover',function(){
		console.log('finding');
		var $this = $(this);
		$this.css('width','100'+'px');
			
	});*/

	$('.partner-name').on('mouseleave',function(){
		//console.log('finding');

		
		//$('.partner').css('display','none');
			
	});


	$('aside').on('mouseenter',function(){
		localStorage["bar"] = 1;


		$(this).animate({
			'width':'170px',
			'duration': '1000', 
			'easing': 'jswing', 
	 	});
	});






	$('aside').on('mouseleave',function(){

		if( localStorage["bar"] == 1){
			$(this).delay(1000).animate({
				'width':'60px',
				'duration': '1000', 
				'easing': 'jswing', 
	 	   });
			$('.partner').css('display','none');
		}



	});



	$('.partner').on('mouseenter',function(){
	//	$('aside').css({'width':'170px !important'});
		localStorage["bar"] = 0;

		$('aside').animate({
			'width':'170px',
			'duration': '1000', 
			'easing': 'jswing', 
	 	});

		$('.partner').css('display','block');


	});

	$('.partner').on('mouseleave',function(){
		localStorage["bar"] = 1;


			$('aside').delay(1000).animate({
				'width':'60px',
				'duration': '1000', 
				'easing': 'jswing', 
	 	   });




	//	$('aside').css({'width':'170px'});
		$('.partner').css('display','none');
	});


	$('.partner-name').on('mouseenter',function(){
	//	console.log('finding');
		
		//$('.partner').delay(8000).css('display','block');
		$('.partner').css('display','block').addClass('animated slideInLeft');
	});

	/*$('a.tabMenu').click(function(){
	    $('a.tabMenu').removeClass("active");
	    $(this).addClass("active");
	});*/
		

});


















$(window).load(function() {  

	var height = $(window).height(),  
	    navbarHeight = $('.nav-bar').height(),
	    asideBottom = height - (271+navbarHeight+180);

	    $('.content-imagio .partner').css('bottom',asideBottom+'px');

	var theWindow        = $(window),
	    $bg              = $("#bg"),
	    aspectRatio      = $bg.width() / $bg.height();
	    			    		
	function resizeBg() {
		
		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    $bg
		    	.removeClass()
		    	.addClass('bgheight');
		} else {
		    $bg
		    	.removeClass()
		    	.addClass('bgwidth');
		}
					
	}
	                   			
	theWindow.resize(resizeBg).trigger("resize");

});