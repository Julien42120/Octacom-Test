
// ANIMATION DE L'IMAGE HUIT DE LA SECTION CREATIONS DIGITALES
var square1 = document.querySelector('.huitPNG');

// update position of square 1 and square 2 when scroll event fires.
window.addEventListener('scroll', function () {
    toggleTopButton();
    var scrollTop = window.pageYOffset;
    square1.style.top = 85 - scrollTop / 100 + 'rem';
});

function toggleTopButton() {
    if (document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100) {
        document.querySelector('#back-to-up').classList.remove('d-none');
    } else {
        document.querySelector('#back-to-up').classList.add('d-none');
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}