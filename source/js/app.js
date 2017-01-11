var main = function(){
//Slider
	$('.arrow-right').click(function(){
		var currentSlide = $('.active-slide');
		var nextSlide = $('.active-slide').next();

		if(nextSlide.length == 0){
			nextSlide = $(".slider-item").first();
		}
		currentSlide.fadeOut(10).removeClass('active-slide');
		nextSlide.fadeIn(300).addClass('active-slide');
	});

	$('.arrow-left').click(function(){
			var currentSlide = $('.active-slide');
			var prevSlide = $('.active-slide').prev();

			if(prevSlide.length == 0){
				prevSlide = $(".slider-item").last();
			}
			currentSlide.fadeOut(10).removeClass('active-slide');
			prevSlide.fadeIn(300).addClass('active-slide');
		});

//Why-block hover
	$('.shoe-feature').hover(function(){
			var i = $(this).attr("num");
			$('.round-' + i).css('background-image', 'url(images/why-round-back-hover.png)');
		}, function(){
			var i = $(this).attr("num");
			$('.round-' + i).css('background-image', 'url(images/why-round-back.png)');
		}
	);
};

	

$(document).ready(main);