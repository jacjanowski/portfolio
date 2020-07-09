$(document).ready(function () {

	$("#modalBtn").click(function(){
		 $('#modalShow').modal('show');
	});
});

$(document).ready(function() {
    $('a').click(function() {
        $('.item.active').removeClass("active");
        $(this).addClass("active");
    });
});

$(window).scroll(function(){
	$("#fade-scroll").each(function(){
		$(this).css("opacity", 1 - $(window).scrollTop() / $('#fade-scroll').height());
	});
    
  });

// $(document).ready(function(){
//     $(window).scroll(function(){
//         $("#hero-image").css("opacity", 1 - $(window).scrollTop() / $('#hero-image').height());
//     });
// });

// $(window).on("load",function() {
//   $(window).scroll(function() {
//     var windowBottom = $(this).scrollTop() + $(this).innerHeight();
//     $(".fade").each(function() {
//       /* Check the location of each desired element */
//       var objectBottom = $(this).offset().top + $(this).outerHeight();
      
//       /* If the element is completely within bounds of the window, fade it in */
//       if (objectBottom < windowBottom) { //object comes into view (scrolling down)
//         if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
//       } else { //object goes out of view (scrolling up)
//         if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
//       }
//     });
//   }).scroll(); //invoke scroll-handler on page-load
// });


$(window).on("load", function () {
    function fade() {
        $('.fade').each(function () {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            /* If the object is completely visible in the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css('opacity') != 1) {
                    $(this).stop(true,false).fadeTo(500, 1);
                }
            } else { //object goes out of view (scrolling up)
                if ($(this).css('opacity') == 1) {
                    $(this).stop(true,false).fadeTo(500, .3);
                }
            }
        });
    }
    fade(); //Fade in completely visible elements during page-load
    $(window).scroll(function () {
        fade();
    }); //Fade in elements during scroll
});