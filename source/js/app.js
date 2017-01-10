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

























	/*var boxes = [], rounds = [];
	for(var i = 0; i < 9; i++){
		var b = $('.shoe-feature:eq(' + i + ')'), r = $('.round:eq(' + i + ')');
		boxes.push(b);
		rounds.push(r);
	}
	for(var i = 0; i < 9; i++){
		boxes[i].hover(function(){
			rounds[i].style.backgroundImage = 'url(images/why-round-back-hover.png)';//css('background-image', 'url(images/why-round-back-hover.png)');
		}, function() {
			rounds.style.backgroundImage = 'url(images/why-round-back.png)';//css('background-image', 'url(images/why-round-back.png)');
		})
	}
//		 = $('.shoe-feature:eq(' + i + ')'),  = $('.round:eq(' + i + ')');
		/*boxes.hover(function () {
			rounds.css('background-image', 'url(images/why-round-back-hover.png)');
		/*.animate({
				backgroundImage : 'images/why-round-back-hover.png'
			}, 500);
		}, function () {
			rounds.animate({
				backgroundImage: 'images/why-round-back.png'
			}, 500);
		}, function(){
			rounds.css('background-image', 'url(images/why-round-back.png)');
		}
	);*/
};

	

$(document).ready(main);