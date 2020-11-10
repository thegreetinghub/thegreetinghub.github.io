$(document).ready(function() {
    $("#toggle-btn").click(function() {
        $(".mobile-nav").toggleClass("mobile-nav-active");
        $(".mobile-nav-li").toggleClass("mobile-nav-li-active");
        $(".all-page-content").toggleClass("all-page-content-margin-subtract");
    });
});
$('.carousel').carousel({
    interval: 5000,
});
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();