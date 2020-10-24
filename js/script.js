/* $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/chevron-right-solid.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false   
                }
        }
        ]
      }); 
    });
 */
//скрипт к слайдеру 
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: false,
    autoHeight: true
  }) 
  var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})

// Go to the previous item
$('.owl-prev').click(function() {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger('prev.owl.carousel', [1]);
});
//Табы
$('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
    $(this)
      .addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
      .closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
});
//Переключение карточки товара с описания на список
  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog_item_content').eq(i).toggleClass('catalog_item_content__active');
        $('.catalog_item_list').eq(i).toggleClass('catalog_item_list__active');
      })
    })
  };
  toggleSlide('.catalog_item_link')
  toggleSlide('.catalog_item_back');
//Modal
 
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.popup_close').on('click', function() {
    $('#consultation, #thanks, #order, .overlay').fadeOut('slow');
  });

  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .popup_descr').text($('.catalog_item_subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });
  //Валидация форм

  function validateForms(form){
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа!")
              },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            }
        }
    });
};

validateForms('#consultation-form');
validateForms('#consultation form');
validateForms('#order form');
//Маска телефона
$('input[name=phone]').mask("+7 (999) 999-99-99");
});
//Библиотека анимаций, очерёдность
new WOW().init(); ({
});


