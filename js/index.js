var cont = 0;
function loopSlider() {
    var xx = setInterval(function () {
        switch (cont) {
            case 0: {
                $("#slider-7").fadeOut(400);
                $("#slider-6").fadeOut(400);
                $("#slider-5").fadeOut(400);
                $("#slider-4").fadeOut(400);
                $("#slider-3").fadeOut(400);
                $("#slider-2").fadeOut(400);
                $("#slider-1").delay(400).fadeIn(400);
                cont = 1;

                break;
            }
            case 1:
                {

                    $("#slider-7").fadeOut(400);
                    $("#slider-6").fadeOut(400);
                    $("#slider-5").fadeOut(400);
                    $("#slider-4").fadeOut(400);
                    $("#slider-3").fadeOut(400);
                    $("#slider-2").delay(400).fadeIn(400);
                    $("#slider-1").fadeOut(400);
                    cont = 2;

                    break;
                }
            case 2:
                {

                    $("#slider-7").fadeOut(400);
                    $("#slider-6").fadeOut(400);
                    $("#slider-5").fadeOut(400);
                    $("#slider-4").fadeOut(400);
                    $("#slider-3").delay(400).fadeIn(400);
                    $("#slider-2").fadeOut(400);
                    $("#slider-1").fadeOut(400);
                    cont = 3;

                    break;
                }
            case 3:
                {
                    $("#slider-7").fadeOut(400);
                    $("#slider-6").fadeOut(400);
                    $("#slider-5").fadeOut(400);
                    $("#slider-4").delay(400).fadeIn(400);
                    $("#slider-3").fadeOut(400);
                    $("#slider-2").fadeOut(400);
                    $("#slider-1").fadeOut(400);
                    cont = 4;

                    break;
                }
            case 4:
                {

                    $("#slider-7").fadeOut(400);
                    $("#slider-6").fadeOut(400);
                    $("#slider-5").delay(400).fadeIn(400);
                    $("#slider-4").fadeOut(400);
                    $("#slider-3").fadeOut(400);
                    $("#slider-2").fadeOut(400);
                    $("#slider-1").fadeOut(400);
                    cont = 5;

                    break;
                }
            case 5:
                {

                    $("#slider-7").fadeOut(400);
                    $("#slider-6").delay(400).fadeIn(400);
                    $("#slider-5").fadeOut(400);
                    $("#slider-4").fadeOut(400);
                    $("#slider-3").fadeOut(400);
                    $("#slider-2").fadeOut(400);
                    $("#slider-1").fadeOut(400);
                    cont = 6;

                    break;
                }
            case 6:
                {

                    $("#slider-7").delay(400).fadeIn(400);
                    $("#slider-6").fadeOut(400);
                    $("#slider-5").fadeOut(400);
                    $("#slider-4").fadeOut(400);
                    $("#slider-3").fadeOut(400);
                    $("#slider-2").fadeOut(400);
                    $("#slider-1").fadeOut(400);
                    cont = 0;

                    break;
                }
        }
    }, 3500);

}

$(window).ready(function () {
    $("#slider-2").hide();
    $("#slider-3").hide();
    $("#slider-4").hide();
    $("#slider-5").hide();
    $("#slider-6").hide();
    $("#slider-7").hide();
    loopSlider();
});