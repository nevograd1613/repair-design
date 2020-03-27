/*
document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
      modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
      element.addEventListener('click', switchModal);
  });  
  closeBtn.addEventListener('click', switchModal);
});

*/
$(document).ready(function(){
 
  $(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
  $('.scrollup').fadeIn();
  } else {
  $('.scrollup').fadeOut();
  }
  });
   
  $('.scrollup').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
  });
   
  });
  
	
$(document).ready(function() {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
  modalBtn.on('click', function() {
    modal.toggleClass('modal--visible');    
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');    
  });
  $(document).keydown(function(e) {
		if (e.keyCode === 27) {
			modal.removeClass('modal--visible');
		}
  });
  $('.modal').click(function(e) {
		if ($(e.target).closest('.modal__dialog').length == 0) {
      modal.toggleClass('modal--visible');					
		}
	});	
  
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');
  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)
  new WOW().init();
  $('.control__form').validate({
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
  },
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      policyСheckbox: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не больше 15 букв"
      },
      userPhone: "Заполните поле",
      policyСheckbox: "Заполните поле",
      userEmail: {
        required: "Заполните поле email",
        email: "Введите корректный email"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          swal({
            text: "Форма отправлена!",
          });
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
    }
  });
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
  $('.footer__form').validate({
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
  },
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      policyСheckbox: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не больше 15 букв"
      },
      userPhone: "Заполните поле",
      policyСheckbox: "Заполните поле",
      userEmail: {
        required: "Заполните поле email",
        email: "Введите корректный email"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          swal({
            text: "Форма отправлена!",
          });
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
    }
  });
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
  $('.modal__form').validate({
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
  },
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      policyСheckbox: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не больше 15 букв"
      },
      userPhone: "Заполните поле",
      policyСheckbox: "Заполните поле",
      userEmail: {
        required: "Заполните поле email",
        email: "Введите корректный email"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          swal({
            text: "Форма отправлена!",
          });
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
    }
  });
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
  //var player;
  //$('.video__play').on('click', function onYouTubeIframeAPIReady() {
    //player = new YT.Player('player', {
      //height: '360',
      //width: '100%',
      //videoId: 'YkM1-k2Q83Q',
      //events: {
        //'onReady': videoPlay,
     // }
    //});
 // })
 // function videoPlay(event) {
  //  event.target.videoPlay();
 // }
 ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [47.244729, 39.723187],
          zoom: 15
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '../img/marker.png',
          // Размеры метки.
          iconImageSize: [32, 32],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      });
      myMap.behaviors.disable('scrollZoom')
  myMap.geoObjects
      .add(myPlacemark);
      var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

});
});