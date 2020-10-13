$(document).ready(function() {
    $("#toggle-btn").click(function() {
        $(".mobile-nav").toggleClass("mobile-nav-active");
        $(".mobile-nav-li").toggleClass("mobile-nav-li-active");
        $(".all-page-content").toggleClass("all-page-content-margin-subtract");
    });
});
$('.carousel').carousel({
    interval: 5000,
})