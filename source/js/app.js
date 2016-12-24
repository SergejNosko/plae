var main = function(){

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
};


$(document).ready(main);