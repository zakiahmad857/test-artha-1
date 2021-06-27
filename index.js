// lOADER

$('html, body').css({
  overflow: 'hidden',
  height: '100%'
});

$(window).on('load', function() {

  $('html, body').css({
    overflow: 'auto',
    height: 'auto'
  })

  $("#loading").addClass("loader-hidden");

  // LOGOGERAK
  var link = $(this).attr('href');

  $('#gerak').load(link+' #content', function(){
    $('#gerak').fadeIn(2000);
  });
});

$('#gerak').fadeOut('slow', function(){
  });

// NAVBAR SCROLL HIDE-SHOW
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $(".navbar").css({
      top: '0'
    });
  } else {
    $(".navbar").css({
      top: '-125px'
    });
  }
  prevScrollpos = currentScrollPos;
}


$(document).ready(function() {
  // PROJECT - GIFs
  $("#project1-all").hover(
    function() {
      $("#project1-img").attr("src", "images/project/floor.gif");
    },
    function() {
      $("#project1-img").attr("src", "images/project/floor.png");
    }
  );

  $("#project2-all").hover(
    function() {
      $("#project2-img").attr("src", "images/project/mockuptronic.gif");
    },
    function() {
      $("#project2-img").attr("src", "images/project/mockuptronic.png");
    }
  );

  $("#project3-all").hover(
    function() {
      $("#project3-img").attr("src", "images/project/mountoya.gif");
    },
    function() {
      $("#project3-img").attr("src", "images/project/mountoya.png");
    }
  );

  $("#project4-all").hover(
    function() {
      $("#project4-img").attr("src", "images/project/animatronic.gif");
    },
    function() {
      $("#project4-img").attr("src", "images/project/animatronic.png");
    }
  );

  $("#project5-all").hover(
    function() {
      $("#project5-img").attr("src", "images/project/tni.gif");
    },
    function() {
      $("#project5-img").attr("src", "images/project/tni.png");
    }
  );

  $("#project6-all").hover(
    function() {
      $("#project6-img").attr("src", "images/project/virtual-exhibition.gif");
    },
    function() {
      $("#project6-img").attr("src", "images/project/virtual-exhibition.png");
    }
  );

  // lOGO
  $('#title').mousemove(function (e) {
        //parallax(e, this, 1);
        parallax(e, document.getElementById('logoku'), 0.25);
    });
});

function parallax(e, target, layer) {
    var layer_coeff = 5 / layer;
    var x = ($(window).width() - target.offsetWidth-40) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
    var y = ($(window).height() - target.offsetHeight-55) / 2 - (e.pageY - ($(window).height() / 1)) / layer_coeff;
    $(target).offset({ top: y ,left : x });
};
