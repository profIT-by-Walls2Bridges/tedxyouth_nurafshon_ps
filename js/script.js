document.addEventListener("DOMContentLoaded", function() {
  // Получаем элемент
  var myElement = document.getElementById("venue");

  // Получаем высоту элемента
  var elementHeight = myElement.clientHeight;

  // Устанавливаем значение переменной CSS
  document.documentElement.style.setProperty('--locad-height', `${elementHeight}px`);
});
/*---------------------------------------------
$(document).ready(function () {
    var slideIndex = 0;

    function showSlides() {
        var slides = $('.slide');
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        slides.hide();
        slides.eq(slideIndex).show();
        slideIndex++;
        setTimeout(showSlides, 3000); // Change slide every 3 seconds (adjust as needed)
    }

    showSlides();
});
---------------------------------------------*/
