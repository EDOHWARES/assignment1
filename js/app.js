const makeScrollSmooth = () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.addEventListener('click', smoothScroll)
    })
}

document.addEventListener("DOMContentLoaded", makeScrollSmooth);

const smoothScroll = (e) => {
    e.preventDefault();
    el = e.target
    const targetId = el.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({behaviour: 'smooth', block: 'end'});
    }
}

const resetLocationUrl = () => {
    const url = window.location.href;
    const new_url = url.replace(/#\w+\s?/g, "")

    if (new_url !== url) {
        // Redirect to the new URL only if it's different
        window.location.href = new_url;
    }
}

document.addEventListener("DOMContentLoaded", resetLocationUrl);

const navLinks = document.querySelectorAll('nav ul li');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach((navlink) => {
            navlink.classList.remove('clicked')
        })
        link.classList.add('clicked')
    })
})

const remaining_tags = document.querySelector('section.assignment .remaining')
const extend_rt_btn = document.querySelector('section.assignment .btn-c button')
const see_less_btn = document.querySelector('section.assignment .btn-d button')

extend_rt_btn.addEventListener('click', () => {
    remaining_tags.style.display = 'block';
    extend_rt_btn.style.display = 'none';
});

see_less_btn.addEventListener('click', () => {
    remaining_tags.style.display = 'none'
    extend_rt_btn.style.display = 'block'
})


menuBtn = document.querySelector('header .container .menu');
mobileNav = document.querySelector('header .container .nav');

closeBtn = document.querySelector('header .container .close');

menuBtn.addEventListener('click', () => {
    mobileNav.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    mobileNav.style.display = 'none';
});

