$(document).ready(function(){
    $('#g01_top').click(function(){
        if($('#g02').css('display') == 'none'){
            $('#gnv li').show();
        }
        else{
            $('#gnv li').css('display','none');
            //$('#g01_top').show();

        }
    })
});