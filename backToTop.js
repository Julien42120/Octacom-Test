window.onscroll = () => {
    toggleTopButton();
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTopButton() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        document.getElementById('back-to-up').classList.remove('d-none');
    } else {
        document.getElementById('back-to-up').classList.add('d-none');
    }
}


// ANIMATION DE L'IMAGE HUIT DE LA SECTION CREATIONS DIGITALES
var square1 = document.querySelector('.huitPNG');

// update position of square 1 and square 2 when scroll event fires.
window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset;
    console.log(scrollTop);


    square1.style.top = 85 - scrollTop / 100 + 'rem';

});
