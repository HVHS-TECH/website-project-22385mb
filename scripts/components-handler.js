/***********************************/
// TEMPLATES
/***********************************/
// Nav Bar Template
const navBarTemplate = document.createElement('template');
navBarTemplate.innerHTML = `
    <style>
    nav {
        background-color: var(--color-main-turq);
        width: 100%;

        position: sticky;
        top: 0px;
        z-index: 100;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .hamburger {
        background-color: blue;
        height: 2rem;
        width: 2rem;

        justify-self: flex-end;
        margin: 0.7rem;
    }

    .logo img{
        margin: 0.3rem 0.5rem;
        height: 40px;
    }
    </style>
    <nav>
        <div class="logo">
            <img src="../assets/graphics/HVHS-Logo.svg" alt="Hutt Valley High School Logo" />
        </div>
        <div class="hamburger">
        </div>
    </nav>
`;

// Drop Down Menu Template
const dropDownTemplate = document.createElement('template');
dropDownTemplate.innerHTML = `
    <style>
        @import url(../styles/component-styles.css)
    </style>

    <div class="dropdown hidden">
            <h1 class="title">Music <span class="titleSpan">@ HVHS</span></h1>
            <a class="poutama top right" href="../index.html">
                <img src="../assets/photos/testImg.JPG" alt="an image of musicians playing">
                <p>Home</p>
            </a>
            <a class="poutama middle centre" href="../html/registration-info.html">
                <img src="../assets/photos/testImg.JPG" alt="an image of musicians playing">
                <p>Registration</p>
            </a>
            <a class="poutama middle right">
                <img src="../assets/photos/testImg.JPG" alt="an image of musicians playing">
                <p>Notices</p>
            </a>
            <a class="poutama bottom left" href="../html/about.html">
                <img src="../assets/photos/testImg.JPG" alt="an image of musicians playing">
                <p>About Us</p>
            </a>
            <a class="poutama bottom centre" href="../html/the-staff.html">
                <img src="../assets/photos/testImg.JPG" alt="an image of musicians playing">
                <p>Our Staff</p>
            </a>
            <a class="poutama bottom right" href="../html/music-groups.html">
                <img src="../assets/photos/testImg.JPG" alt="an image of musicians playing">
                <p>Musical Groups</p>
            </a>
        </div>
`;

// Footer Template
const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `


`;


/***********************************/
// CLASSES for extending elements
/***********************************/
class NavBar extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open'});
        let clone = navBarTemplate.content.cloneNode(true);

        shadowRoot.append(clone);
    }
}

class DropDown extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open'});
        let clone = dropDownTemplate.content.cloneNode(true);

        shadowRoot.append(clone);
    }
}

/***********************************/
// DEFINE ELEMENTS
/***********************************/
customElements.define('nav-bar', NavBar);
customElements.define('drop-down-menu', DropDown);