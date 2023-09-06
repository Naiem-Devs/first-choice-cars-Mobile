(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (event){ 
    event.preventDefault();
    $('.mobile-menu').toggleClass('siteBar');   
  }); 
  
 // Search Bar header 
  $('.src_btn').click( function (event){ 
    event.preventDefault();
    $('.h_search').toggleClass('active');   
  }); 

   // Feature_blk  
 let carLogo = document.querySelectorAll('.car-logo')

 carLogo.forEach(carLogos => {
  carLogos.addEventListener('click', () => {
    carLogos.parentElement.parentElement.classList.toggle('active')
  })
 })

  //sticky nav
  window.addEventListener('scroll', function() {
    let header = document.querySelector('.header-area');
    header.classList.toggle('sticky', window.scrollY > 0);
  });

   // src_car 
   $('.Sell_Car').click( function (event){ 
    event.preventDefault();
    $('.Sell_tab').toggleClass('active');   
    $(".fixed__nav ul li a.Sell_Car").toggleClass('active');   
  }); 

   // src_car 
   $('.Buy_Car').click( function (event){ 
    event.preventDefault();
    $('.buy_tab').toggleClass('active');   
    $(".fixed__nav ul li a.Buy_Car").toggleClass('active');   
  }); 

   // src_car 
   $('.Commercial_Car').click( function (event){ 
    event.preventDefault();
    $('.Commercial_tab').toggleClass('active');   
    $(".fixed__nav ul li a.Commercial_Car").toggleClass('active');   
  }); 




  // owlCarousel
  $(".Feature_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  // owlCarousel
  $(".offer_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 3
      },
      992: {
        items: 3
      }
    }
  });

  // owlCarousel
  $(".Testimonial_slider").owlCarousel({
    loop: true,
    margin: 10,
    items: 4,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });


  // owlCarousel
  $(".team_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 4,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 3
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });

  // owlCarousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });


  //Nice Select
  $('select').niceSelect();

  //AOS Animation
  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: true,
  });


  //Slick Slider
 // https://codepen.io/louiegerodiaz/pen/BqGPGW
  $(function(){
    $('.slider-thumb').slick({
      // autoplay: true,
      vertical: true,
      infinite: true,
      verticalSwiping: true,
      slidesPerRow: 3,
      slidesToShow: 3,
      asNavFor: '.slider-preview',
      focusOnSelect: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-up"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-down"></i></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            vertical: false,
          }
        },
        {
          breakpoint: 479,
          settings: {
            vertical: false,
            slidesPerRow: 1,
            slidesToShow: 1,
          }
        },
      ]
    });
    $('.slider-preview').slick({
      // autoplay: true,
      vertical: false,
      infinite: true,
      slidesPerRow: 1,
      slidesToShow: 1,
      asNavFor: '.slider-thumb',
      arrows: false,
      draggable: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            vertical: false,
            fade: true,
          }
        },
      ]
    });
  });
 
})(jQuery);
