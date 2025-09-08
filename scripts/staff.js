import { animate, scroll } from "https://cdn.jsdelivr.net/npm/motion@12.23.12/+esm";

var scrollDistances = {}
window.onload = scrollingStaff();
window.addEventListener("resize", scrollingStaff)

function scrollingStaff() {
    var staffWidth = 0;
    const staffCollections = document.querySelectorAll(".staff-collection");
    staffCollections.forEach((collection) => {
        let bound = collection.getBoundingClientRect()
        staffWidth += bound.width;
        scrollDistances[collection.id] = bound.x;
    })
    scrollDistances["container"] = Math.abs(document.querySelector(".staff-interactive").getBoundingClientRect().top-document.querySelector(".header").getBoundingClientRect().top);
    console.log("container distance = " + scrollDistances["container"]);
    // console.log(document.querySelector(".header").getBoundingClientRect());
    // scrollDistances["container"] = 920;

    scroll(
        animate(".staff-container",
            {transform: ["none", `translateX(-${staffWidth}px)`]}
        ), 
        {target: document.querySelector(".staff-interactive")}
    );

    document.querySelector(".stave").style.width = staffWidth + 500;
}

document.querySelectorAll(".scroll-link").forEach((_link) => {
    _link.addEventListener("click", (event) => {
        scrollToStaffSection(event.target.innerHTML);
    })
})

function scrollToStaffSection(_section) {
    let  sectionDistance = scrollDistances[_section];
    console.log("scrolled " + window.pageYOffset);
    console.log(sectionDistance);
    // document.querySelector(".staff-interactive").scrollIntoView();
    // setTimeout(() => {
    //     window.scroll({
    //         top: window.pageYOffset + scrollDistances[_section],
    //         left: 0,
    //         behavior: "smooth",
    //     })
    // }, 100);
    window.scroll({
            top: scrollDistances["container"] + scrollDistances[_section],
            left: 0,
            behavior: "smooth",
    })
}

const staffNotes = document.querySelectorAll(".staff-note");
staffNotes.forEach((note) => {
    note.addEventListener("click", (event) => {
        event.stopPropagation();
        var target = event.target;
        while(target.classList[0] != "staff-note") {
            target = target.parentElement;
        }
        showStaffInfo(target.attributes["data-staff-member"].value);
    })
})

document.querySelector(".staff-interactive").addEventListener("click", closeStaffCard , {capture: true});

document.querySelector(".exit-card").addEventListener("click", closeStaffCard);

function showStaffInfo(_staffMember) {
    var infoCard = document.querySelector(`.info-card#${_staffMember}`);
    infoCard.classList.add("info-card-show");
}

function closeStaffCard() {
    let currentCard = document.querySelector(".info-card-show");
    if(currentCard != null) {
        currentCard.classList.remove("info-card-show");
    }
}
