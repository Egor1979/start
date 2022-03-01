$(function () {

  $('.header-slider').slick({
    
    dots: true, prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>',
    fade: true,
    responsive:[
      {
      breakpoint:361,
      settings:{
        dots:false,
        arrows:false,
        autoplay:true,
        autoplaySpeed: 2000,
      }
    }
      
    ]
  });
    //дотс тру это взято из натсроек слайдера на слик внизу саита это вызвало цифры
    //стрелки в слайдере настройка,я пропис.в своб.месте хтмл адрес вырезал ископир.сюда
  


  $('.product__name').slick({
    slidesToShow: 6,//всего слаидов
    slidesToScroll: 1,//пролист за раз
    focusOnSelect: true,//чтобы при нажатии связаная картинка появилась
    asNavFor: '.product__content',//связал слайдеры
    vertical: true,
    prevArrow: '<button type="button" class="product-prev"><img src="images/product-prevu.png" alt=""></button>',
    nextArrow: '<button type="button" class="product-next"><img src="images/product-next.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 891,/*НА 1 БОЛЬШЕ ПИКСЕЛИ ПИШЕШЬ */
        settings: {
          vertical: false,
          slidesToShow:3,
          arrows:false,
          
        },
        breakpoint:461,
        settings: {
          vertical:   false,  
          slidesToShow: 1,
          arrows: false,
          dots:true
        
        } 
      }
    ]
  });
  
  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    fade: true,
    arrows: false

  });
  //БУРГЕР КНОПКУ ПРИВЯЗЫВАЮ К МЕНЮ ЛИСТ .ТОГЛКЛАСС ЧТОБ ИСЧ.ПРИ ПОВТ НАЖ МЕН.
  $('.menu__btn').on('click',function(){
    $('.menu__list').toggleClass('menu__list--active');
  });
});
