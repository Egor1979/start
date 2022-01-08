$(function () {//поключил слайдер и до возмю.

  $('.header-slider').slick({
    dots: true, prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt="l"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt="l"></button>'
    //дотс тру это взято из натсроек слайдера на слик внизу саита это вызвало цифры
    //стрелки в слайдере настройка,я пропис.в своб.месте хтмл адрес вырезал ископир.сюда
  });
});

$('.product__name').slick({
  slidesToShow: 6,//всего слаидов
  slidesToScroll: 1,//пролист за раз
  focusOnSelect: true//чтобы при нажатии связаная картинка появилась
   asNavFor: '.product__content'//связал слайдеры
});
$('.product__content').slick({
  /*slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  */
});
