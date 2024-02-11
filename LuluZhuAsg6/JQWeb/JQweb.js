$(function(){
    $('.nav').hide().delay(500).fadeIn(1000);


	$('.links').eq(0).click(function() {

		$('.mainContent').empty();
		let $about = "<p>Our initiative rests on a three-fold strategy: sustenance, safety, and population control. Regular feeding combats hunger and malnutrition, while custom shelters shield from the elements. Through spaying and neutering, we curtail unchecked breeding, curbing suffering. However, our endeavors hinge on your kindness. Generous donations power our efforts, sustaining food supplies, constructing shelters, and enabling vital medical procedures. Join us in safeguarding these vulnerable lives. Your support heralds a brighter future, where feral cats experience love and compassion.</p>";
		
		$('.mainContent').html($about);
	})

    $('.links').eq(1).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('.section').empty();
		let $video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/PubcPnKeO0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		$('.mainContent').html($video);
	})

    $('.links').eq(2).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('.mainContent').empty();
		let $catphoto1 = '<img src="cat1.jpg" border=2 style="width:200%; height:200%;">';
		$('.mainContent').html($catphoto1);
		
	})
});