// Setting Path Start for relative file paths
var pathStart = "../";
if(window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
    pathStart = "./";
}
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
        <a class="logo" href="${pathStart}index.html">
            <img src="${pathStart}assets/graphics/HVHS-Logo.svg" alt="Hutt Valley High School Logo" />
        </a>
        <img class="hamburger" src="${pathStart}assets/graphics/hamburger-menu.svg" alt="">
    </nav>
`;

// Drop Down Menu Template
const dropDownTemplate = document.createElement('template');
dropDownTemplate.innerHTML = `
    <style>
        @import url(${pathStart}styles/component-styles.css)
    </style>

    <div class="dropdown hidden">
            <!-- <h1 class="title">Music <span class="titleSpan">@HVHS</span></h1>-->
            <a class="poutama top right" href="${pathStart}index.html">
                <picture> <!-- String-Orchestra -->
                    <source media="(min-width: 767px)" srcset="${pathStart}assets/photos/poutama/string-orchestra_ls.jpg">
                    <img class="heroItem poutama" src="${pathStart}assets/photos/poutama/string-orchestra_portrait.jpg" alt="Mr Kovacev conducting the school string orchestra and jazz band at the HVHS 2024 prizegiving">
                </picture>
                <p>Home</p>
            </a>
            <a class="poutama middle centre" href="${pathStart}html/registration-info.html">
                <picture> <!-- Guitar-Sheet-Music -->
                    <source media="(min-width: 767px)" srcset="${pathStart}assets/photos/poutama/guitar-sheet-music_ls.jpg">
                    <img class="heroItem poutama" src="${pathStart}assets/photos/poutama/guitar-sheet-music_portrait.jpg" alt="Mr Kovacev conducting the school string orchestra and jazz band at the HVHS 2024 prizegiving">
                </picture>
                <p>Registration</p>
            </a>
            <a class="poutama middle right">
                <picture> <!-- Jazz-Brass-Prizegiving -->
                    <source media="(min-width: 767px)" srcset="${pathStart}assets/photos/poutama/jazz-brass-prizegiving_ls.jpg">
                    <img class="heroItem poutama" src="${pathStart}assets/photos/poutama/jazz-brass-prizegiving_portrait.jpg" alt="Mr Kovacev conducting the school string orchestra and jazz band at the HVHS 2024 prizegiving">
                </picture>
                <p>Notices</p>
            </a>
            <a class="poutama bottom left" href="${pathStart}html/courses-info.html">
                <picture> <!-- Guitar-Group -->
                    <source media="(min-width: 767px)" srcset="${pathStart}assets/photos/poutama/guitar-group_ls.jpg">
                    <img class="heroItem poutama" src="${pathStart}assets/photos/poutama/guitar-group_portrait.jpg" alt="Mr Kovacev conducting the school string orchestra and jazz band at the HVHS 2024 prizegiving">
                </picture>
                <p>Courses</p>
            </a>
            <a class="poutama bottom centre" href="${pathStart}html/the-staff.html">
                <picture> <!-- Mrk-conducting -->
                    <source media="(min-width: 767px)" srcset="${pathStart}assets/photos/poutama/mrk-conducting_ls.jpg">
                    <img class="heroItem poutama" src="${pathStart}assets/photos/poutama/mrk-conducting_portrait.jpg" alt="Mr Kovacev conducting the school string orchestra and jazz band at the HVHS 2024 prizegiving">
                </picture>
                <p>Our Staff</p>
            </a>
            <a class="poutama bottom right" href="${pathStart}html/music-groups.html">
                <picture> <!-- Volante-Prizegivng -->
                    <source media="(min-width: 767px)" srcset="${pathStart}assets/photos/poutama/volante-prizegiving_ls.jpg">
                    <img class="heroItem poutama" src="${pathStart}assets/photos/poutama/volante-prizegiving_portrait.jpg" alt="Mr Kovacev conducting the school string orchestra and jazz band at the HVHS 2024 prizegiving">
                </picture>
                <p>Musical Groups</p>
            </a>
        </div>
`;

// Footer Template
const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
    <style>
        @import url(${pathStart}styles/component-styles.css)
    </style>
    <footer>
        <div class="poutama top left"></div>
        <div class="poutama top centre"></div>
        <div class="poutama top right"></div>
        <div class="poutama middle left"></div>
        <div class="poutama middle centre"></div>
        <div class="poutama bottom left"></div>
        <div class="logo">
            <img src="${pathStart}assets/graphics/HVHS-Logo.svg" alt="Hutt Valley High School's Ad Alta Logo">
        </div>
        <div class="blurb">
            <p>This is a cool blurb telling you all about the HVHS music department and why you should join!</p>
            <a class="btn" href="${pathStart}html/registration-info.html">Sign Up For Lessons</a>
        </div>
        <div class="external-links">
                <a target="_blank" href="https://www.hvhs.school.nz"><img src="${pathStart}assets/graphics/footer-icons/akar-icons--globe.svg" alt="Visit the HVHS school website."></a>
                <a target="_blank" href="https://www.youtube.com/@gracewright8894/featured"><img src="${pathStart}assets/graphics/footer-icons/akar-icons--youtube-fill.svg" alt="Visit the Music Department's youtube channel."></a>
                <a target="_blank" href="https://www.instagram.com/hvhsofficial/"><img src="${pathStart}assets/graphics/footer-icons/akar-icons--instagram-fill.svg" alt="Visit the Music Department's instagram page."></a>
                <a target="_blank" href="https://www.facebook.com/hvhs.school.nz"><img src="${pathStart}assets/graphics/footer-icons/akar-icons--facebook-fill.svg" alt="Visit the Music Department's facebook page."></a>
        </div>
        <div class="contact-info">
            <h5>Contact Us</h5>
            <p><img src="${pathStart}assets/graphics/footer-icons/akar-icons--location.svg" alt="Location icon."> 84-114 Woburn Road, Woburn, 5010, Lower Hutt</p>
            <p><img src="${pathStart}assets/graphics/footer-icons/akar-icons--envelope.svg" alt="Email address icon."> music@hvhs.school.nz</p>
        </div>
        <!-- <p class="links-header">Quick Links</p> -->
        <div class="links">
            <p>See the latest</p>
            <a href="${pathStart}index.html">Home</a>
            <a>Notices</a>
        </div>
        <div class="links">
            <p>Sign Up</p>
            <a href="${pathStart}html/registration-info.html">Registration Information</a>
        </div>
        <div class="links">
            <p>Find out More</p>
            <a href="${pathStart}html/about.html">About</a>
            <a href="${pathStart}html/the-staff.html">Staff</a>
            <a href="${pathStart}html/music-groups.html">Groups</a>
        </div>  
        <div class="copyright-notice">
            <p>© 2025 Hutt Valley High School | Design & Code by Miles Baldwin
| Photos by Adrian Cartwright</p>
        </div>
    </footer>
`;

const groupInfoTemplate = document.createElement('template');
groupInfoTemplate.innerHTML = `
<style>
    @import url(${pathStart}styles/registration.css)
</style>
    <div class="group-info current" data-card-num="2">
        <h4 class="group-name"><slot name="name">Group Name</slot></h4>
        <p class="group-coord">With <slot name="coord" class="bold">Chris Buckland</slot></p>
        <slot name="blurb">
            <p>
                The HVHS Barbershop Quartet is cool.
            </p>
        </slot>
        <p class="times">Jazz Band meets on Wednesdays at 1:30pm in M1</p>
        <br>
        <a class="btn">Contact</a>
        <div class="group-imgs">
            <img class="group-img" src="${pathStart}assets/photos/squares/prizegiving-jazz-band.jpg">
            <img class="group-img" src="${pathStart}assets/photos/squares/prizegiving-jazz-band.jpg">
            <img class="group-img" src="${pathStart}assets/photos/squares/prizegiving-jazz-band.jpg">
        </div>
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

class CustomFooter extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open'});
        let clone = footerTemplate.content.cloneNode(true);

        shadowRoot.append(clone);
    }
}

class GroupInfo extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open'});
        let clone = groupInfoTemplate.content.cloneNode(true);

        shadowRoot.append(clone);
    }
}

/***********************************/
// DEFINE ELEMENTS
/***********************************/
customElements.define('nav-bar', NavBar);
customElements.define('drop-down-menu', DropDown);
customElements.define('custom-footer', CustomFooter);
customElements.define('group-info-card', GroupInfo);