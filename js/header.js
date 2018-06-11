
$(document).ready(function(){


    var win = $(window);
    var allMods = $(".module");
    var allModsDown = $(".module-down");
    var sections = $('section')
        , nav = $('nav')
        , nav_height = nav.outerHeight();

    //don't do slide up animation if the divs are already in view
    allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("already-visible");
        }
    });

    allModsDown.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("already-visible");
        }
    });

    //smooth scrolling
    nav.find('a').on('click', function () {
        var $el = $(this)
            , id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height - 50
        }, 500);

        return false;
    });


    win.scroll(function(event) {
        //slide up animation for about us
        allMods.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("come-in");
            }
        });

        allModsDown.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("come-in-down");
            }
        });

        //nav shadow and opacity change on scroll
        $('header').toggleClass('scrolled', $(this).scrollTop() > 50);

        //add active class to current section
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


});





(function($) {
    //function to determine what is visible
    $.fn.visible = function(partial) {

        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };


})(jQuery);

