$("#started")
.countdown("2016/09/06", function(event) {
  $(this).text(
    event.strftime('%DNgày %Hh %Mp %Ss')
  );
});

//menu fix
jQuery(document).scroll( function(){
  scoll_top = jQuery(document).scrollTop();
  height_header= jQuery('#page1').height();
  if( scoll_top > '200' ){
    jQuery("header").addClass("menu2");
  }else{
    jQuery("header").removeClass("menu2");
  }
});


$("#menumb li").click(function(){
    $("#menumb").removeClass("w3-show");
});
setTimeout(function(){
  $("#load").css("display","none")
  $("#contents").css("opacity","1")
},600);
jQuery(document).ready(function() {
    $(document).on("scroll", onScroll);
      //smoothscroll
    $('a[href^="#"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top-45}, 500);
    $("#menumb").removeClass("w3-show");
    return false;
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top-50}, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu  a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top-70 <= scrollPos && refElement.position().top-50 + refElement.height() > scrollPos) {
           $('#menu  a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

$(document).ready(function() {
  $('#page4 .iframe').each(function(){
    $id = jQuery(this).attr('src').split('embed/');
    // jQuery(this).css('background','url("media/images/clips.jpg") no-repeat scroll center center,#ddd no-repeat scroll 0 -47px / cover');
    // jQuery(this).css('background-size','100% auto, cover');
    // jQuery(this).css('cursor','pointer');
  })
  $('.iframe').click(function(){
    jQuery(this).append('<iframe width="100%" height="100%" src="'+jQuery(this).attr('src')+'?autoplay=1" />')
  })
});
function myFunction() {
    var x = document.getElementById("menumb");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

$(function() {
    $("img.lazy").lazyload({
    	effect : "fadeIn",
    	threshold: 100,
    });
});
//anh truoc sau
var myIndex = 0;
//carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
var myIndex2 = 0;
//carousel2();

function carousel2() {
    var i;
    var x = document.getElementsByClassName("mySlides2");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex2++;
    if (myIndex2 > x.length) {myIndex2 = 1}
    x[myIndex2-1].style.display = "block";
    setTimeout(carousel2, 3000); // Change image every 2 seconds
}

// openCity("London")
// function openCity(cityName) {
//     var i;
//     var x = document.getElementsByClassName("city");
//     for (i = 0; i < x.length; i++) {
//        x[i].style.display = "none";
//     }
//     document.getElementById(cityName).style.display = "block";
// }

function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
