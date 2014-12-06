$('li > a').click(
    function(){
        var tag = this.id;
        $('html,body').animate({scrollTop:$(tag).offset().top - 50}, 'slow');
    }
);