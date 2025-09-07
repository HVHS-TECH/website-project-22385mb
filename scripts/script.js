document.querySelector("nav-bar").shadowRoot.querySelector(".hamburger").addEventListener("click", () => {
    const dropdown = document.querySelector("drop-down-menu").shadowRoot.querySelector(".dropdown");
    if(dropdown.classList.contains("hidden")) {
        dropdown.classList.remove("hidden");
    } else {
        dropdown.classList.add("hidden");
    }
})

const scrollArrow = document.querySelector("scrollArrow");
if(scrollArrow != null) {
    scrollArrow.addEventListener("click", () => {
        window.scroll({
            top: 550,
            left: 0,
            behavior: "smooth",
        })
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