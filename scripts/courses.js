// Mobile Links menu code
document.querySelector('.menu').addEventListener("click", () => {
    let menu = document.querySelector(".course-links");
    if(menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
})
document.querySelectorAll(".course-links a").forEach((link) => {
    link.addEventListener("click", () => {
        let menu = document.querySelector(".course-links");
        menu.classList.add("hidden");
    })
});

const collapsables = document.querySelectorAll(".collapse");
collapsables.forEach((collapsable) => {
    collapsable.querySelector(".btn").addEventListener("click", expandSection);
})

var mobileMediaQuery = window.matchMedia("(max-width: 600px");
mobileMediaQuery.addEventListener("change", () => {
    checkForScreenSize(mobileMediaQuery);
})
checkForScreenSize(mobileMediaQuery);

function expandSection(event) {
    let collapsable = event.currentTarget.parentNode;
    let table = collapsable.children[1];
    if(table.classList.contains("collapsed")) {
        table.classList.remove("collapsed");
    } else {
        table.classList.add("collapsed");
    }
}

function checkForScreenSize(_mediaQuery) {
    if(_mediaQuery.matches) {
        getTables("mobile");
    } else {
        getTables("desktop");
    }
}

function getTables(_form) {
    let tables = document.querySelectorAll(".assessments");
    if(_form == "mobile") {
        tables.forEach(createMobileTable);
    } else {
        tables.forEach(createTable);
    }
}

function createMobileTable(_table) {
    let rows = _table.children[0].children;
    // Create overarching div
    let assessments = document.createElement("div");
    assessments.classList.add("assessments", "collapsed");

    for(var i = 1; i < rows.length; i++) {
        let data = rows[i].children;
        let unpackedData = {
            num: data[0].innerHTML,
            name: data[1].innerHTML,
            type: data[2].innerHTML,
            credits: data[3].innerHTML,
        }
        let section = document.createElement('div');
        section.classList.add("section");
        if(i == rows.length-1) {
            section.classList.add("total");
        }
        section.innerHTML = `
            <p class="num">${unpackedData.num}</p>
            <p class="name">${unpackedData.name}</p>
            <p>${unpackedData.type}</p>
            <p class="credits">${unpackedData.credits}</p>
        `;
        assessments.append(section);
    }
    _table.parentNode.append(assessments);
    _table.remove();
}

function createTable(_table) {
    if(_table.tagName != "TABLE") {
        let sections = _table.children;
        // Create overarching table
        let newTable = document.createElement("table");
        newTable.classList.add("assessments", "collapsed");
        let tableBody = document.createElement("tbody");

        let row = document.createElement('tr');  
        row.innerHTML = `
                <th>Assessment</th>
                <th>Description</th>
                <th>Internal or External</th>
                <th>Credits</th>
        `;
        tableBody.append(row);

        for(var i = 0; i < sections.length; i++) {
            let data = sections[i].children;
            let unpackedData = {
                num: data[0].innerHTML,
                name: data[1].innerHTML,
                type: data[2].innerHTML,
                credits: data[3].innerHTML,
            }
            let row = document.createElement('tr');
            
            row.innerHTML = `
                    <td>${unpackedData.num}</td>
                    <td>${unpackedData.name}</td>
                    <td>${unpackedData.type}</td>
                    <td>${unpackedData.credits}</td>
            `;
            tableBody.append(row);
        }
        newTable.append(tableBody);
        _table.parentNode.append(newTable);
        _table.remove();
    }
}