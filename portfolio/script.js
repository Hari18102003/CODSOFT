// carousel motion

const backBtn = $(".back");
const nextBtn = $(".next");

const slide1 = $(".slide-1");
const slide2 = $(".slide-2");
const slide3 = $(".slide-3");

nextBtn.click(function () {
    if (slide1.hasClass("active")) {

        slide1.css("transform", "translateX(-200%)");
        slide3.css("transform", "translateX(200%)");
        slide2.css("transform", "translateX(0)");
        slide1.removeClass("active");
        slide2.addClass("active");
    }
    else if (slide2.hasClass("active")) {

        slide1.css("transform", "translateX(200%)");
        slide2.css("transform", "translateX(-200%)");
        slide3.css("transform", "translateX(0)");
        slide2.removeClass("active");
        slide3.addClass("active");

    }
    else {

        slide1.css("transform", "translateX(0)");
        slide2.css("transform", "translateX(200%)");
        slide3.css("transform", "translateX(-200%)");
        slide3.removeClass("active");
        slide1.addClass("active");

    }
});

backBtn.click(function () {
    if (slide1.hasClass("active")) {

        slide1.css("transform", "translateX(200%)");
        slide3.css("transform", "translateX(0)");
        slide2.css("transform", "translateX(-200%)");
        slide1.removeClass("active");
        slide3.addClass("active");
    }
    else if (slide2.hasClass("active")) {

        slide1.css("transform", "translateX(0)");
        slide2.css("transform", "translateX(200%)");
        slide3.css("transform", "translateX(-200%)");
        slide2.removeClass("active");
        slide1.addClass("active");

    }
    else {

        slide1.css("transform", "translateX(-200%)");
        slide2.css("transform", "translateX(0)");
        slide3.css("transform", "translateX(200%)");
        slide3.removeClass("active");
        slide2.addClass("active");

    }
});


// responsiveness

$('.menu-icon').click(function () {
    $('ul').toggleClass('show');
});
