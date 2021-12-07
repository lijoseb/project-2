$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 800) {
        $('.title direct').fadeIn();
    } else {
        $('.title direct').fadeOut();
    }

});
