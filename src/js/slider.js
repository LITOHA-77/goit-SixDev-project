
var $slider = $('.slider-text');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + '/' +slidesCount)
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $('.slider-text').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    asNavFor: '.slider',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, 
    ]
  });

  $('.slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    asNavFor: '.slider-text',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
}



// $(function() {
	
// 	$(".news__slider").on("init reInit afterChange", function(event, slick) {
// 		$(".news__counter").html(
// 			slick.slickCurrentSlide() + 1 + "/" + slick.slideCount
// 		);
// 	});

//   $('.slider-text').slick({
//     dots: false,
//     arrows: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 1000,
//     asNavFor: '.slider',
//     responsive: [
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }, 
//     ]
//   });
//   $('.slider').slick({
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 1000,
//     asNavFor: '.slider-text',
//     responsive: [
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       },
//     ]
//   });
// })
