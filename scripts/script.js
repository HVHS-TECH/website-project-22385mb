/******************************************/
// script.js
// Code for the home page scroll button
/******************************************/

// When the user clicks the scroll down icon (on home page) the page scrolls
const scrollArrow = document.querySelector(".scrollArrow");
if(scrollArrow != null) {
    scrollArrow.addEventListener("click", () => {
        window.scroll({
            top: 550,
            left: 0,
            behavior: "smooth",
        })
    })
}
