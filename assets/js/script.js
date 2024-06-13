const modal = document.querySelector(".modals");
const nav = document.querySelector(".nav");
const openNavItem = document.querySelector(".nav__item-child");
const navItems = document.querySelectorAll(".nav__mobile-js");
const subNav = document.querySelector(".subnav");
const btnNav = document.querySelector(".subnav__mobile-js");
const subNavItems = document.querySelectorAll(".subnav__link");

// Modal
function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

// Mobile Nav
function openNav() {
    toggleNav = !toggleNav;
    nav.classList.add("open");
}
function closeNav() {
    toggleNav = !toggleNav;
    nav.classList.remove("open");
}

// Mobile sub nav
function openSubNav() {
    if (window.innerWidth <= 740) {
        toggleSubNav = !toggleSubNav;
        nav.classList.add("open");
        nav.classList.add("open__subnav");
    }
}
function closeSubNav() {
    if (window.innerWidth <= 740) {
        toggleSubNav = !toggleSubNav;
        nav.classList.remove("open");
        nav.classList.remove("open__subnav");
    }
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function nothing(event) {
    event.stopPropagation();
}

let toggleNav = false;
openNavItem.addEventListener("click", function () {
    if (toggleNav) closeNav();
    else openNav();
});

let toggleSubNav = false;
btnNav.addEventListener("click", function () {
    if (toggleSubNav) closeSubNav();
    else openSubNav();
});
subNav.addEventListener("click", closeSubNav);
for (const subNavItem of subNavItems) {
    subNavItem.onclick = function () {
        closeSubNav();
        closeNav();
    };
}
for (const navItem of navItems) {
    navItem.addEventListener("click", closeNav);
}

// Slider
const sliderImg = document.querySelector(".slider__img");
const sliderHeading = document.querySelector(".slider__heading");
const sliderText = document.querySelector(".slider__description");

const fileNames = ["la.jpg", "ny.jpg", "chicago.jpg"];
const data = {
    "la.jpg": ["Los Angeles", "We had the best time playing at Venice Beach!"],
    "ny.jpg": ["New York", "The atmosphere in New York is lorem ipsum."],
    "chicago.jpg": ["Chicago", "Thank you, Chicago - A night we won't forget."],
};
let cout = 1;
async function slideChanger() {
    while (true) {
        if (cout >= 3) cout = 1;
        const silderContent = data[fileNames[cout - 1]];
        console.log(silderContent);
        sliderImg.src = `./assets/img/${fileNames[cout - 1]}`;
        sliderHeading.textContent = silderContent[0];
        sliderText.textContent = silderContent[1];
        cout++;
        await sleep(5_000);
    }
}
slideChanger();
