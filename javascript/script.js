$(document).ready(function(){

  $('.accordion').click(function() {
    $(".step-call", this).toggle();
  });
  $('.accordion').click(function() {
    $(".step-call-hide", this).toggle();
  });

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function(){
          /* Toggle between adding and removing the "active" class,
          to highlight the button that controls the panel */
          this.classList.toggle("active");

          /* Toggle between hiding and showing the active panel */
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      }
  }

// PARALLAX SCROLL
  $('#window-1').parallax({imageSrc: './images/001.jpg'});
});


//NAVIGATION SCROLL

$(window).scroll(function() {

	if ($(window).scrollTop() > 150 ){

      $(".nav-head").stop().animate({opacity: 1, height: "50px"}, 400);
      $(".logo").stop().animate({"font-size": "20px"}, 400);

 	// 	$('nav ul').addClass('nav-show');

  } else {

      $(".nav-head").stop().animate({opacity: .5, height: "70px"}, 400);
      $(".logo").stop().animate({"font-size": "26px"}, 400);
 	};
});

$('.scroll').on('click', function(e){
		e.preventDefault()

  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});
