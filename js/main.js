$('.slider').slick({
  infinite: true,
  accessibility:true,
  slidesToShow: 4,
  slidesToScroll: 1,
  adaptiveHeight: true,
  centerMode: true,
  centerPadding: '50px',
  responsive: [
  {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
             }
        },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
             }
    }, 
 {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
             }
         }, 
 ],
    
});