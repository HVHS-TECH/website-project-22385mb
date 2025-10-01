const collapsables = document.querySelectorAll(".collapse");
collapsables.forEach((collapsable) => {
    console.log(collapsable.children);
    collapsable.querySelector(".btn").addEventListener("click", expandSection);
})

function expandSection(event) {
    let collapsable = event.currentTarget.parentNode;
    let table = collapsable.children[1];
    if(table.classList.contains("collapsed")) {
        table.classList.remove("collapsed");
    } else {
        table.classList.add("collapsed");
    }
}