/**
 * Define Global Variables
*/
const nav = document.querySelector("#nav_links");
const sections = document.querySelectorAll("section");

/*identifying the active section */

function activeSection() {
    maxSection = sections[0];
    minVal = 1000;
    for (item of sections) {
        let bounding = item.getBoundingClientRect();
        if (bounding.top > -100 & bounding.top < minVal) {
            minVal = bounding.top;
            maxSection = item;
        };
    };
    return maxSection;
};

// build the navbar using loop
function buildNav() {
    for (let item of sections){
        let section = document.createElement("li");
        section.className = 'menu';
        section.dataset.nav = item.id;
        section.textContent = item.dataset.name;
        nav.appendChild(section);
    };
};

buildNav();

/*setting active section with your-active-class and removing it from non active sections */

function setActive () {
    window.addEventListener('scroll', function (event) {
        let section = activeSection();
        section.classList.add('your-active-class');
        // set other sections as inactive
        for (let item of sections) {
            if (item.id != section.id & item.classList.contains('your-active-class')) {
                item.classList.remove('your-active-class');
            }
        }
        // setting the header style
        const active = document.querySelector('li[data-nav="' + section.id + '"]');
        active.classList.add('active__link');
        // removing the active class from none active sections
        const headers = document.querySelectorAll('.menu');
        for (let item of headers) {
            console.log(item);
            if (item.dataset.nav != active.dataset.nav & item.classList.contains('active__link')) {
                item.classList.remove('active__link');
            }
        };
    });
};
setActive();

// adding the scroll to based on anchors
function scrollToAnchor() {
    nav.addEventListener('click', function (scroll) {
        const selected = document.querySelector('#' + scroll.target.dataset.nav);
        selected.scrollIntoView();
    });
};
scrollToAnchor();

// change default curser to pointer cursor
function cursor() {
    document.getElementById("nav_links").style.cursor = "pointer";
}
cursor();