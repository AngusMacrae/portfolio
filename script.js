document.addEventListener('DOMContentLoaded', function () {

    const sections = document.querySelectorAll(".scroll-section");
    const links = document.querySelectorAll("#main-nav a");
    const sectionMargin = 200;

    const makeActive = (link) => links[link].classList.add("active-page");
    const removeActive = (link) => links[link].classList.remove("active-page");
    const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

    // function fadeLoading() {
    //     document.querySelector('.loading-screen').classList.add("faded-out");
    //     document.querySelector('.socket').classList.add("faded-out");
    // }

    // function enableScroll() {
    //     document.querySelector('body').classList.add("visible");
    // }

    // setTimeout(fadeLoading, 500);
    // setTimeout(enableScroll, 3500);

    // let currentActive = 0;

    window.addEventListener("scroll", () => {

        const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1;

        // if (current !== currentActive) {
        //     removeAllActive();
        //     currentActive = current;
        //     makeActive(current);
        // }

        removeAllActive();
        makeActive(current);

    });

}, false);