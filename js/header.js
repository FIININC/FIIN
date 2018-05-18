
$(document).ready(function(){
    var sections = $('section')
        , nav = $('nav')
        , nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height - 75,
                bottom = top + $(this).outerHeight();

            if($(window).scrollTop() + $(window).height() == $(document).height()) {
                nav.find('a').removeClass('active');
                nav.find('a[href="#partners"]').addClass('active');
            }else if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this)
            , id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height - 50
        }, 500);

        return false;
    });
});

$(window).scroll(function(){
    $('header').toggleClass('scrolled', $(this).scrollTop() > 50);
});