(function($) {

    $(document).ready(function() {

        var $wrap = $('.wrap');

        $wrap.find(".wrap-img").each(function () { 
            var url = $(this).find('img').attr('src');
            var bkg = 'url(' + url +')'; 
            $(this).css({'background-image' : bkg });
        });
        $wrap.find( "img" ).css('display', 'none');

    });

})(jQuery);
