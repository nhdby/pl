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

// Image ANIMATIONS

var options = {
  imgSrc: "images/portrait.jpg",
  containerName: "placeholder",
  rows: 5,
  columns: 5,
  margin: 2.5,
  animTime: 0.3
};

// function ImageGrid(defaults) {
//   var r = defaults.rows;
//   var c = defaults.columns;
//   var margin = defaults.margin;
//
//   var placeholder = document.getElementsByClassName(defaults.containerName)[0];
//   var container = document.createElement("div");
//   container.className = "gridContainer";
//   placeholder.appendChild(container);
//
//   var gridTile;
//
//   var w = container.offsetWidth / c - margin;
//   var h = container.offsetHeight / r - margin;
//   var arr = [];
//
//   for (var i = 0, l = r * c; i < l; i++) {
//     gridTile = document.createElement("div");
//     gridTile.className = "gridTile";
//     gridTile.style.backgroundImage = "url(" + defaults.imgSrc + ")";
//
//     arr = [
//       (w + margin) * (i % c),
//       (h + margin) * Math.floor(i / c),
//       (w + margin) * (i % c) + w - margin,
//       (h + margin) * Math.floor(i / c),
//       (w + margin) * (i % c) + w - margin,
//       (h + margin) * Math.floor(i / c) + h - margin,
//       (w + margin) * (i % c),
//       (h + margin) * Math.floor(i / c) + h - margin
//     ];
//
//     // console.log(i + " ====>>> " + arr + " ||||| " + i%c  + " |||||| " + i/c);
//
//     TweenMax.set(gridTile, {
//       webkitClipPath:
//         "polygon(" +
//         arr[0] +
//         "px " +
//         arr[1] +
//         "px," +
//         arr[2] +
//         "px " +
//         arr[3] +
//         "px, " +
//         arr[4] +
//         "px " +
//         arr[5] +
//         "px, " +
//         arr[6] +
//         "px " +
//         arr[7] +
//         "px)",
//       clipPath:
//         "polygon(" +
//         arr[0] +
//         "px " +
//         arr[1] +
//         "px," +
//         arr[2] +
//         "px " +
//         arr[3] +
//         "px, " +
//         arr[4] +
//         "px " +
//         arr[5] +
//         "px, " +
//         arr[6] +
//         "px " +
//         arr[7] +
//         "px)"
//     });
//
//     container.appendChild(gridTile);
//
//     fixTilePosition(gridTile, i);
//   }
//
//   placeholder.addEventListener("mouseover", function(e) {
//     var allTiles = e.currentTarget.querySelectorAll(".gridTile");
//     for (var t = 0, le = allTiles.length; t < le; t++) {
//       TweenMax.to(allTiles[t], defaults.animTime, {
//         css: { backgroundPosition: "0px 0px" },
//         ease: Power1.easeOut
//       });
//     }
//   });
//
//   placeholder.addEventListener("mouseleave", function(e) {
//     var allTiles = e.currentTarget.querySelectorAll(".gridTile");
//     for (var ti = 0, len = allTiles.length; ti < len; ti++) {
//       fixTilePosition(allTiles[ti], ti, defaults.animTime);
//     }
//   });
//
//   function fixTilePosition(tile, ind, time) {
//     if (time == null) time = 0;
//     var centr, centrCol, centrRow, offsetW, offsetH, left, top;
//
//     centr = Math.floor(c * r / 2);
//     centrCol = Math.ceil(centr / c);
//     centrRow = Math.ceil(centr / r);
//
//     offsetW = w / centrCol;
//     offsetH = h / centrRow;
//
//     left = Math.round((ind % c - centrCol + 1) * offsetW);
//     top = Math.round((Math.floor(ind / c) - centrRow + 1) * offsetH);
//
//     //console.log(left, top)
//
//     TweenMax.to(tile, time, {
//       css: { backgroundPosition: left + "px " + top + "px" },
//       ease: Power1.easeOut
//     });
//   }
// }

ImageGrid(options);
