document.querySelector("nav-bar").shadowRoot.querySelector(".hamburger").addEventListener("click", () => {
    const dropdown = document.querySelector("drop-down-menu").shadowRoot.querySelector(".dropdown");
    if(dropdown.classList.contains("hidden")) {
        dropdown.classList.remove("hidden");
    } else {
        dropdown.classList.add("hidden");
    }
})

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
