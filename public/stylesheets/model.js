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


$(document).on('scroll', function () {
	var pageTop = $(document).scrollTop();
	var pageBottom = pageTop + $(window).height();
	var tags = $('section');

	for (var i = 0; i < tags.length; i++) {
		var tag = tags[i];

		if ($(tag).position().top < pageBottom) {
			$(tag).addClass('visible');
		} else {
			$(tag).removeClass('visible');
		}
	}
});
