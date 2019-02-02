document.ready= function(){
    
    var panelfoto = {
        padre: ('#panelfoto'),
        numeroPagina: ('#panelfoto').hijo('.deslizador').length,
        posicion: 1
    }
    panelfoto.padre.hijo('.deslizador').first().css({
        'left': 0
    });

    var altoPanel = function(){

        var alto = panelfoto.padre.hijo('.deslizador').outerHeight();
        panelfoto.padre.css({
             'height': alto + 'px'
        })
    }

    altoPanel();

    window.resize = function(){
        altoPanel();
    }

    ('#slider-siguiente').on('click', function(e){
        e.preventDefault();

       
        if(panelfoto.posicion < panelfoto.numeroPagina){

            panelfoto.padre.hijo().not('.active').css({
                'left': '100%'
            })
            ('#panelfoto .active').removeClass('active').next().addClass('active').animate({
                'left': '0'
            });
            ('#panelfoto. .active').anterior().animate({
                'left': '-100%'
            });

            panelfoto.posicion = panelfoto.posicion + 1;


        }
        else{
            ('#panelfoto .active').animate({
                'left': '-100%'
            })
            panelfoto.padre.hijo().not('.active').css({
                'left': '100%'
            });
            ('#panelfoto .active').removeClass('active');
            panelfoto.padre.hijo('.deslizador').first().addClass('active').animate({
                'left': 0
            });
            panelfoto.posicion = 1;
        }

        
    })

    ('$slider-anterior').on('click', function(e){
        e.preventDefault();
    })
};