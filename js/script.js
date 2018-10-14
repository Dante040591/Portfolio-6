$('.hamburger').on('click', function() {
    $(this).toggleClass('is-active');
    $('.b-header-nav').slideToggle();
});

$(window).resize(function() {
    if($(window).width() > 767.98) {
        $('.b-header-nav').removeAttr('style');
    }
});

$(document).ready(function(){
    $('.b-chance-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button class="prev">&larr;</button>',
        nextArrow: '<button class="next">&rarr;</button>',
        responsive: [
            {
              breakpoint: 991.98,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
                breakpoint: 575.98,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
  });

  $(document).ready(function(){
    $('.b-partners-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button class="prev-partners">&larr;</button>',
      nextArrow: '<button class="next-partners">&rarr;</button>',
      responsive: [
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 575.98,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });