document.querySelector("nav-bar").shadowRoot.querySelector(".hamburger").addEventListener("click", () => {
    const dropdown = document.querySelector("drop-down-menu").shadowRoot.querySelector(".dropdown");
    if(dropdown.classList.contains("hidden")) {
        dropdown.classList.remove("hidden");
    } else {
        dropdown.classList.add("hidden");
    }
})