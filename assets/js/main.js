document.addEventListener("DOMContentLoaded", function(event) {

    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId)

        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show')
                toggle.classList.toggle('bx-x')
                bodypd.classList.toggle('body-pd')
                headerpd.classList.toggle('body-pd')
            })
        }
    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'))
            this.classList.add('active')
        }
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink))

});


// ====== SCROLL REVEAL ======

ScrollReveal({
    reset: true,
    distance: '300px',
    duration: 6000,
    delay: 200
});
ScrollReveal().reveal('.about-img', {

    delay: 200,
    origin: 'left'
});
ScrollReveal().reveal('.about-text', {
    delay: 400,
    origin: 'right'
});
ScrollReveal().reveal('.event-content', {
    distance: '100px',
    delay: 100,
    origin: 'right'
});
ScrollReveal().reveal('.event-content2', {
    distance: '150px',
    delay: 200,
    origin: 'right'
});
ScrollReveal().reveal('.event-content3', {
    distance: '200px',
    delay: 300,
    origin: 'right'
});
ScrollReveal().reveal('.event-content4', {
    distance: '250px',
    delay: 400,
    origin: 'right'
});
// skills -script
var offsetTop = $('.skill-detail').offset().top;
$(window).scroll(function() {
    var height = $(window).height();
    if ($(window).scrollTop() + height > offsetTop) {
        jQuery('.skill-bar').each(function() {
            jQuery(this).find('.skill-box').animate({
                width: jQuery(this).attr('data-percent')
            }, 6000);
        });
    }
});