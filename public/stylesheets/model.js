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
		$("#fade-scroll").css("opacity", 1 - $(window).scrollTop() / 350);
	});
    
  });