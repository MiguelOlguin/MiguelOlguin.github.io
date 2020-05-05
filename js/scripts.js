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
      container: 'body'   
  });
  
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
      $('#categorias').selectpicker('mobile');
  }
});
/*
  function getCategorias() {
    let dropdown = document.getElementById('categorias');
    dropdown.length = 0;

    let defaultOption = document.createElement("option");
    defaultOption.text = 'Elegí una categoria';

    dropdown.appendChild(defaultOption);
    dropdown.options[dropdown.options.length] = new Option('Text 1', 'Value1');
    const url = 'http://192.168.1.43:4004/categorias';
    const request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function () {
      if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        let option;

        for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
          option.text = data[i].nombre;
          dropdown.options[dropdown.options.length] = new Option(option.text, i);
        }
      } else {
        // Reached the server, but it returned an error
      }
    }

    request.onerror = function () {
      console.error('An error occurred fetching the JSON from ' + url);
    };

    request.send();
  }
  /*
  function getCategorias(listName, siteurl, success, failure) {
    $.ajax({
      url: "localhost:4004/categorias",
      method: "GET",
      headers: {
        "Accept": "application/json; odata=verbose"
      },
      success: function (data) {
        console.log(data);
        success(data);
      },
      error: function (data) {
        failure(data);
        console.log("Falla");
      }
    });
  }
  */
 
})(jQuery); // End of use strict