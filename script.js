$(document).ready(function() {
    $('.header_burger').click(function(event){
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $(".header_list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function() {
    $('.header_list a').click(function(event){
        $('.header_burger,.header_menu').removeClass('active');
        $('body').removeClass('lock');
    });
});