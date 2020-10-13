$(document).ready(function() {
    $("#toggle-btn").click(function() {
        $(".mobile-nav").toggleClass("mobile-nav-active");
        $(".mobile-nav-li").toggleClass("mobile-nav-li-active");
    });
});