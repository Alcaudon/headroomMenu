$(function(){

    var header = document.getElementById('header');
    var headroom = new Headroom(header);
    headroom.init();

    //Menu responsive
    //Calculamos el ancho de la página

    var ancho = $(window).width(),
        enlaces = $('#enlaces'),
        search = $('input'),
        select = $('ul'),
        btnMenu = $('#btn-menu'),
        icono = $('#btn-menu .icono');

        if (ancho<848){
            enlaces.hide();
            search.hide();
            icono.addClass('fa-bars');
            select.hide();
        }
        
        btnMenu.on('click', function() {
           enlaces.slideToggle();
           icono.toggleClass('fa-bars');
           icono.toggleClass('fa-times');
        });

        $(window).on('resize', function () {
            if($(this).width() > 848){
                enlaces.show();
                icono.addClass('fa-times');
                icono.removeClass('fa-bars');
                search.addClass('search');
                search.removeClass('no-search');
            }else{
                enlaces.hide();
                icono.addClass('fa-bars');
                icono.removeClass('fa-times');
                search.addClass('no-search');
                search.removeClass('search');
            }
        })
})