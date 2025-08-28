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
        width: 3rem;
        margin: 0.1em 0.7em;
    }

    .logo img{
        margin: 0.3rem 0.5rem;
        height: 40px;
    }
    </style>
    <nav>
        <a class="logo" href="../index.html">
            <img src="../assets/graphics/HVHS-Logo.svg" alt="Hutt Valley High School Logo" />
        </a>
        <img class="hamburger" src="../assets/graphics/hamburger-menu.svg" alt="">
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
                <picture> <!-- String-Orchestra -->
                    <source media="(min-width: 767px)" srcset="../assets/photos/poutama/string-orchestra_ls.jpg">
                    <img class="heroItem poutama" src="../assets/photos/poutama/string-orchestra_portrait.jpg" alt="Mr Kovacev conducting the school string orchestra and jazz band at the HVHS 2024 prizegiving">
                </picture>
                <p>Home</p>
            </a>
            <a class="poutama middle centre" href="../html/registration-info.html">
                <picture> <!-- Guitar-Sheet-Music -->
                    <source media="(min-width: 767px)" srcset="../assets/photos/poutama/guitar-sheet-music_ls.jpg">
                    <img class="heroItem poutama" src="../assets/photos/poutama/guitar-sheet-music_portrait.jpg" alt="Mr Kovacev conducting the school string orchestra and jazz band at the HVHS 2024 prizegiving">
                </picture>
                <p>Registration</p>
            </a>
            <a class="poutama middle right">
                <picture> <!-- Jazz-Brass-Prizegiving -->
                    <source media="(min-width: 767px)" srcset="../assets/photos/poutama/jazz-brass-prizegiving_ls.jpg">
                    <img class="heroItem poutama" src="../assets/photos/poutama/jazz-brass-prizegiving_portrait.jpg" alt="Mr Kovacev conducting the school string orchestra and jazz band at the HVHS 2024 prizegiving">
                </picture>
                <p>Notices</p>
            </a>
            <a class="poutama bottom left" href="../html/about.html">
                <picture> <!-- Guitar-Group -->
                    <source media="(min-width: 767px)" srcset="../assets/photos/poutama/guitar-group_ls.jpg">
                    <img class="heroItem poutama" src="../assets/photos/poutama/guitar-group_portrait.jpg" alt="Mr Kovacev conducting the school string orchestra and jazz band at the HVHS 2024 prizegiving">
                </picture>
                <p>About Us</p>
            </a>
            <a class="poutama bottom centre" href="../html/the-staff.html">
                <picture> <!-- Mrk-conducting -->
                    <source media="(min-width: 767px)" srcset="../assets/photos/poutama/mrk-conducting_ls.jpg">
                    <img class="heroItem poutama" src="../assets/photos/poutama/mrk-conducting_portrait.jpg" alt="Mr Kovacev conducting the school string orchestra and jazz band at the HVHS 2024 prizegiving">
                </picture>
                <p>Our Staff</p>
            </a>
            <a class="poutama bottom right" href="../html/music-groups.html">
                <picture> <!-- Volante-Prizegivng -->
                    <source media="(min-width: 767px)" srcset="../assets/photos/poutama/volante-prizegiving_ls.jpg">
                    <img class="heroItem poutama" src="../assets/photos/poutama/volante-prizegiving_portrait.jpg" alt="Mr Kovacev conducting the school string orchestra and jazz band at the HVHS 2024 prizegiving">
                </picture>
                <p>Musical Groups</p>
            </a>
        </div>
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