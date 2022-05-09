$(document).on( "change", ".form-select", function(){
    var dropone = $('#drop-one').val();
    var droptwo = $('#drop-two').val();
    var dropthree = $('#drop-three').val();
    var dropfour = $('#drop-four').val();
    var dropfive = $('#drop-five').val();

    var filterclass = '.portfolio-grid-itic';
    var filterhr = '.my-5';

    if(dropone!='A1'){
        filterclass += '.'+dropone;
        filterhr += '.'+dropone;        
    }

    if(droptwo!='B1'){
        filterclass += '.'+droptwo;
        filterhr += '.'+droptwo;        
    }

    if(dropthree!='C1'){
        filterclass += '.'+dropthree;
        filterhr += '.'+dropthree;        
    }

    if(dropfour!='D1'){
        filterclass += '.'+dropfour;
        filterhr += '.'+dropfour;        
    }

    if(dropfive!='E1'){
        filterclass += '.'+dropfive;
        filterhr += '.'+dropfive;        
    }

    $('.portfolio-grid-itic').hide();
    $(filterclass).show();
    $('.my-5').hide();
    $(filterhr).show();

});