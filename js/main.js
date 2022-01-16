$(function () {

  $('.header-slider').slick({
    dots: true, prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>',
    fade: true
    //дотс тру это взято из натсроек слайдера на слик внизу саита это вызвало цифры
    //стрелки в слайдере настройка,я пропис.в своб.месте хтмл адрес вырезал ископир.сюда
  });


  $('.product__name').slick({
    slidesToShow: 6,//всего слаидов
    slidesToScroll: 1,//пролист за раз
    focusOnSelect: true,//чтобы при нажатии связаная картинка появилась
    asNavFor: '.product__content',//связал слайдеры
    vertical: true,
    prevArrow: '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="product-next"><img src="images/product-next.svg" alt=""></button>',
  });
  
  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    fade: true

  });
});
