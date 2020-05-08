/*!
 * Start Bootstrap - Creative v6.0.1 (https://startbootstrap.com/themes/creative)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
 */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });
  $(document).ready(function () {
    $('#categorias').selectpicker({
      container: 'body',
      maxOptions: 5
    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      $('#categorias').selectpicker('mobile');

    }
    $('#provincias').selectpicker({
      container: 'body'
    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      $('#provincias').selectpicker('mobile');
    }

    $("#Enviar").click(function () {
      var preguntaSi = document.getElementById("preguntaSi").checked;
      var preguntaNo = document.getElementById("preguntaNo").checked;
      var necesita = document.getElementById("necesita").checked;
      var ofrece = document.getElementById("ofrece").checked;
      var postIngresadas = $("#ingresadas").val();
      var provincias = document.getElementById("provincias");
      var postProvincias = provincias.options[provincias.selectedIndex].value;
      var categorias = document.getElementById("categorias");
      var postCategorias = categorias.selectedOptions;
      var postcontanosPorque =$("#porque")[0].value;
      var val = $.trim($("porque").val());
    if (val != "") {
        alert(val);
    }
      console.log("preguntaSi: " + preguntaSi);
      console.log("preguntaNo: " + preguntaNo);
      console.log("necesita: " + necesita);
      console.log("ofrece: " + ofrece);
      var categoriasPasar =[];
      if ((preguntaSi || preguntaNo) && (necesita || ofrece) && postCategorias.length>0) {

        console.log(postProvincias);
        for (var i = 0; i < postCategorias.length; i++) {
          categoriasPasar.push(postCategorias[i].value);
          console.log(postCategorias[i].value);
        }
        console.log(postIngresadas);
        var propuestaPasar=0;
        if(preguntaSi){
          propuestaPasar=1;
        }
        var oferentePasar =0;
        if(ofrece){
          oferentePasar=1;
        }
        $.post('http://trato.com.ar:50080/encuestas',  
        { propuesta: propuestaPasar,
          oferente: oferentePasar,
          categorias: categoriasPasar,
          provincia: postProvincias,
          contanosPorque : postcontanosPorque,
          ingresadas: postIngresadas
        }, 
        function(data, status, xhr) {
        
        
            
        }).done(function() {   bootbox.alert("Datos cargados correctamente. Gracias por colaborar con nosotros"); })
        .fail(function(jqxhr, settings, ex) { 
          
          if(ex){
           bootbox.alert(jqxhr.responseText); 
          }
          if(ex){

          }
      });


      } else {
        $(document).ready(function () {
          bootbox.alert("Por favor completá los campos requeridos y seleccioná una o más categorias para continuar");
        });
      }
    });

  });
})(jQuery); // End of use strict