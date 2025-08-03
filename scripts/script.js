document.querySelector(".hamburger").addEventListener("click", () => {
    const dropdown = document.querySelector(".dropdown");
    if(dropdown.classList.contains("hidden")) {
        dropdown.classList.remove("hidden");
    } else {
        dropdown.classList.add("hidden");
    }
})

document.querySelector(".scrollArrow").addEventListener("click", () => {
    window.scroll({
        top: 500,
        left: 0,
        behavior: "smooth",
    })
})