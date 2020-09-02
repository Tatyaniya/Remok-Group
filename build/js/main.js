$( function() {

    /***** Плавная прокрутка *****/

    $('.offer__btn--cost, .menu__list li a').click( e => {
        e.preventDefault();
		elementClick = $(e.currentTarget).attr("href");
        destination = $(elementClick).offset().top;
        destination -= 116;
        $('body,html').animate({scrollTop: destination }, 800);
    });


    /***** Модалка *****/

    $('.offer__btn--contact, .services__btn').click( e => {
        e.preventDefault();
		$('.modal-overlay').fadeIn();
    });

    $('.modal').click( e => {
		$('.modal-overlay').fadeOut();
    });

    /***** Спасибо *****/

    $('.modal__btn').click( e => {
        e.preventDefault();
		$('.modal-overlay-thanks').fadeIn();
    });

    $('.modal-thanks').click( e => {
		$('.modal-overlay-thanks').fadeOut();
    });


     /*** Слайдер c работами ***/

     $('.works__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<img src="img/arrow-prev.png" alt="prev" class="works-prev">',
        nextArrow: '<img src="img/arrow-next.png" alt="next" class="works-next">',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });

    /*** Слайдер "Что говорят клиенты" ***/

    $('.whatSay__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        centerMode: true,
        centerPadding: '10px',
        prevArrow: '<img src="img/arrow-prev.png" alt="prev" class="whatSay-prev">',
        nextArrow: '<img src="img/arrow-next.png" alt="next" class="whatSay-next">',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });

    /*** Слайдер в блоге ***/

    $('.blog__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<img src="img/arrow-prev.png" alt="prev" class="blog-prev">',
        nextArrow: '<img src="img/arrow-next.png" alt="next" class="blog-next">',

        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });
   
    /*** Гамбургер ***/

    $('.hamburger').click(function(){
        $( '.menu__list' ).toggleClass('menu-open');
    });        

    
    $('.menu__list li a').click(function(){
        if ($(window).width() < 992) { 
            $('.ham').removeClass('active');
            $( '.menu__list').removeClass('menu-open');
        }
    });

    /*** Анимация в хедере ***/

    if ($(window).width() > 992) { 

        $(window).scroll(function() {
            
            $('.header__logo').animate({
                opacity: 1,
            }, 800);
            $('.menu__list').animate({
                left: '0',
            }, 800);
        });
    }
    
});
