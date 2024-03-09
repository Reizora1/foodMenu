var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentSlide(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slideshow");
    var y = document.getElementsByClassName("slideshow1");
    if (n > x.length) {
    slideIndex = 1;
    }
    if (n < 1) {
    slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
    y[slideIndex - 1].style.display = "block";
}

function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = 'block';
}

function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    var popups = document.querySelectorAll('.popup');

    popups.forEach(function (popup) {
    popup.addEventListener('click', function (event) {
        if (event.target === popup) {
        closePopup(popup.id);
        }
    });
    });

    document.addEventListener('click', function (event) {
    if (!event.target.closest('.card') && !event.target.closest('.popup-content')) {
        // Clicked outside of both card and popup-content
        closePopup('bestSellerPopup');
        closePopup('popularMealPopup');
        closePopup('budgetMealPopup');
    }
    });
});