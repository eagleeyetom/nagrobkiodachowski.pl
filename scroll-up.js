$(document).ready(function(){
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    $('#btn-go-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
