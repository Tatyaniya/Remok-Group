$( function() {

    $('.offer__btn--cost').click( e => {
        e.preventDefault();
		elementClick = $(e.currentTarget).attr("href");
		destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 500);
    });

    // $('.slick-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){

    //     if(parseInt(currentSlide + 1) < 10) {
    //         $('.number-slider__active').text( '0' + parseInt(currentSlide + 1));
    //     } else {
    //         $('.number-slider__active').text(parseInt(currentSlide + 1));
    //     }
        
    // });

     /*** Слайдер c работами ***/

     $('.works__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<img src="img/arrow-prev.png" alt="prev" class="works-prev">',
        nextArrow: '<img src="img/arrow-next.png" alt="next" class="works-next">',
    });

    /*** Слайдер "Что говорят клиенты" ***/

    $('.whatSay__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: '10px',
        prevArrow: '<img src="img/arrow-prev.png" alt="prev" class="whatSay-prev">',
        nextArrow: '<img src="img/arrow-next.png" alt="next" class="whatSay-next">',
    });

    /*** Слайдер в блоге ***/

    $('.blog__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<img src="img/arrow-prev.png" alt="prev" class="blog-prev">',
        nextArrow: '<img src="img/arrow-next.png" alt="next" class="blog-next">',
    });
        

    // $('#humburger-header').click(function(){
    //     $( ".navigation__nav" ).toggleClass("navigation__nav-open");
    // });

    // $('#humburger-footer').click(function(){
    //     $( ".footer__nav" ).toggleClass("footer__nav-open");
    // });

    // if ($(window).width() < 960)
    // { 
			
    // }

 
});
