$("#knapp1").click(function() {
    $('html,body').animate({
      scrollTop:$("#block-2").offset().top}, 2000);
    });
    $("#knapp2").click(function() {
        $('html,body').animate({
          scrollTop:$("#block-3").offset().top}, 2000);
        });
    $("#knapp3").click(function() {
        $('html,body').animate({
          scrollTop:$("#block-1").offset().top}, 2000);
        });
