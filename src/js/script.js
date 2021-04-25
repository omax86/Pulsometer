$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left_arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right_arrow.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                    pauseOnDotsHover: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 575,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});
