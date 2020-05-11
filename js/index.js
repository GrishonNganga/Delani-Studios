$('document').ready(function(){
    
    $('#design').click(function(){
        $('#design-img').toggle();
        $('#design-txt').toggle();
    });

    $('#development').click(function(){
        $('#development-img').toggle();
        $('#development-txt').toggle();
    });

    $('#product').click(function(){
        $('#product-img').toggle();
        $('#product-txt').toggle();
    });

    var days = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
    days.forEach(function(day){
        $('#'+day).hover(function(){
            $('.'+day).toggle();
        });
    });

});