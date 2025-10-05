/******************************************/
// staff.js
// Code for the staff page feature
// Opening and closing staff info
// Scrolling and links to sections
/******************************************/
import { animate, scroll } from "https://cdn.jsdelivr.net/npm/motion@12.23.12/+esm";

//Array of distances needed to scroll to reach each section
var scrollDistances = {}

// On load run scrollingStaff() to set distances also do the same everytime the screen resizes
window.onload = scrollingStaff();
window.addEventListener("resize", scrollingStaff)

// For each staffNote add a click event to open the staff info card
const staffNotes = document.querySelectorAll(".staff-note");
staffNotes.forEach((note) => {
    note.addEventListener("mouseenter", showStaffInfo);
    note.addEventListener("click", showStaffInfo);
})
// Add events for closing the staff info card
document.querySelector(".staff-interactive").addEventListener("click", closeStaffCard , {capture: true});
document.querySelectorAll("staff-info-card").forEach((card) => {
    card.addEventListener("mouseleave", closeStaffCard);
    card.shadowRoot.querySelector(".exit-card").addEventListener("click", closeStaffCard);
});

/**********************************/
// scrollingStaff()
// Sets up the horizontally scrolling staff feature, figures out distances and lengths of collections
// Uses Framer Motion Scroll and Animate events to connect the horizontal movement of the element to the user scrolling
// INPUT
//      _direction - specify either "left" or "right" to direct which way the slideshow moves 
/**********************************/
function scrollingStaff() {
    var staffWidth = 0;
    const staffCollections = document.querySelectorAll(".notes-collection");
    staffCollections.forEach((collection) => {
        let bound = collection.getBoundingClientRect()
        staffWidth += bound.width;
        scrollDistances[collection.id] = bound.x;
    })
    scrollDistances["container"] = Math.abs(document.querySelector(".staff-interactive").getBoundingClientRect().top - document.querySelector(".header").getBoundingClientRect().top);

    scroll(
        animate(".staff-container",
            {transform: ["none", `translateX(-${staffWidth}px)`]}
        ), 
        {target: document.querySelector(".staff-interactive")}
    );

    document.querySelector(".stave").style.width = staffWidth + 500;
}

// Add event listenr for the section links
document.querySelectorAll(".scroll-link").forEach((_link) => {
    _link.addEventListener("click", (event) => {
        scrollToStaffSection(event.target.innerHTML);
    })
})

/**********************************/
// scrollToStaffSection(_section)
// Scroll to the speicifed section of the staff feature
// INPUT
//      _section - the id of the section to go to 
/**********************************/
function scrollToStaffSection(_section) {
    window.scroll({
            top: scrollDistances["container"] + scrollDistances[_section],
            left: 0,
            behavior: "smooth",
    })
}

/**********************************/
// showStaffInfo(_staffMember)
// Open a sepcific staff members info card
// INPUT
//      _staffMember - the name of the staff member which corresponds to the info card's ID
/**********************************/
function showStaffInfo(event) {
    event.stopPropagation();
    closeStaffCard();
    var target = event.target;
    while(target.classList.contains("staff-note") != true) {
        target = target.parentElement;
    }
    let staffMember = target.attributes["data-staff-member"].value
    var infoCard = document.querySelector(`#${staffMember}`);
    infoCard.classList.add("info-card-show");
}

/**********************************/
// closeStaffCard()
// Close the current infor card
/**********************************/
function closeStaffCard() {
    let currentCard = document.querySelector(".info-card-show");
    if(currentCard != null) {
        currentCard.classList.remove("info-card-show");
    }
}
