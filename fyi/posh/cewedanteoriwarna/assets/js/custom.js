$(document).ready(function(){
    $(".bg-slider1").hide()
    $(".bg-slider1:first-child").show();
    
    $(".prev1").click(function(){
        slidePrev();
    })
    
    $(".next1").click(function(){
        slideNext();
    })

});

function slidePrev() {
    if ($("#slider1 .active").index() == 0) {
        slideTo($("#slider1 .bg-slider1").length - 1);
    }
    else {
        slideTo($("#slider1 .active").index() - 1);
    }
}

function slideNext() {
    if ($("#slider1 .active").index() == $("#slider1 .bg-slider1").length - 1) {
        slideTo(0);
    }
    else {
        slideTo($("#slider1 .active").index() + 1);
    }
}

function slideTo(slide) {
    $("#slider1 .active").fadeOut().removeClass("active");
    $("#slider1 .bg-slider1").eq(slide).fadeIn().addClass("active");
}

//* slider 2

$(document).ready(function(){
    $(".bg-slider2").hide()
    $(".bg-slider2:first-child").show();
    
    $(".prev2").click(function(){
        slidePrev2();
    })
    
    $(".next2").click(function(){
        slideNext2();
    })

});

function slidePrev2() {
    if ($("#slider2 .active").index() == 0) {
        slideTo2($("#slider2 .bg-slider2").length - 1);
    }
    else {
        slideTo2($("#slider2 .active").index() - 1);
    }
}

function slideNext2() {
    if ($("#slider2 .active").index() == $("#slider2 .bg-slider2").length - 1) {
        slideTo2(0);
    }
    else {
        slideTo2($("#slider2 .active").index() + 1);
    }
}

function slideTo2(slide) {
    $("#slider2 .active").fadeOut().removeClass("active");
    $("#slider2 .bg-slider2").eq(slide).fadeIn().addClass("active");
}

//* slider 3

$(document).ready(function(){
    $(".bg-slider3").hide()
    $(".bg-slider3:first-child").show();
    
    $(".prev3").click(function(){
        slidePrev3();
    })
    
    $(".next3").click(function(){
        slideNext3();
    })

});

function slidePrev3() {
    if ($("#slider3 .active").index() == 0) {
        slideTo3($("#slider3 .bg-slider3").length - 1);
    }
    else {
        slideTo3($("#slider3 .active").index() - 1);
    }
}

function slideNext3() {
    if ($("#slider3 .active").index() == $("#slider3 .bg-slider3").length - 1) {
        slideTo3(0);
    }
    else {
        slideTo3($("#slider3 .active").index() + 1);
    }
}

function slideTo3(slide) {
    $("#slider3 .active").fadeOut().removeClass("active");
    $("#slider3 .bg-slider3").eq(slide).fadeIn().addClass("active");
}