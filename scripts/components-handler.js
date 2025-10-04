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
        <div class="poutama-content">
            <div class="logo">
                <img src="${pathStart}assets/graphics/HVHS-Logo.svg" alt="Hutt Valley High School's Ad Alta Logo">
            </div>
            <div class="contact-info">
                <h5>Contact Us</h5>
                <a><img src="${pathStart}assets/graphics/footer-icons/akar-icons--location.svg" alt="Location icon."> 84-114 Woburn Road, Woburn, 5010, Lower Hutt</a>
                <a target="_blank" href="mailto:music@hvhs.school.nz"><img src="${pathStart}assets/graphics/footer-icons/akar-icons--envelope.svg" alt="Email address icon."> music@hvhs.school.nz</a>
                <a target="_blank" href="tel:+6445664584"><img src="${pathStart}assets/graphics/footer-icons/akar-icons--phone.svg" alt="Phone icon."> +64 4 566 4584</a>
            </div>
        </div>
        <div class="external-links">
            <a target="_blank" href="https://www.hvhs.school.nz"><img src="${pathStart}assets/graphics/footer-icons/akar-icons--globe.svg" alt="Visit the HVHS school website."></a>
            <a target="_blank" href="https://www.youtube.com/@gracewright8894/featured"><img src="${pathStart}assets/graphics/footer-icons/akar-icons--youtube-fill.svg" alt="Visit the Music Department's youtube channel."></a>
            <a target="_blank" href="https://www.instagram.com/hvhsofficial/"><img src="${pathStart}assets/graphics/footer-icons/akar-icons--instagram-fill.svg" alt="Visit the Music Department's instagram page."></a>
            <a target="_blank" href="https://www.facebook.com/hvhs.school.nz"><img src="${pathStart}assets/graphics/footer-icons/akar-icons--facebook-fill.svg" alt="Visit the Music Department's facebook page."></a>
        </div>
        <!-- <p class="links-header">Quick Links</p> -->
        <div class="site-map">
            <div class="links">
                <p>See the latest</p>
                <a href="${pathStart}index.html">Home</a>
                <a>Notices</a>
            </div>
            <div class="links">
                <p>Find out More</p>
                <a href="${pathStart}html/courses-info.html">Courses</a>
                <a href="${pathStart}html/the-staff.html">Staff</a>
                <a href="${pathStart}html/music-groups.html">Groups</a>
            </div>
            <div class="links">
                <p>Sign Up</p>
                <a href="${pathStart}html/registration-info.html">Registration Information</a>
            </div>
        </div>  
        <div class="copyright-notice">
            <p>© 2025 Hutt Valley High School | Design & Code by Miles Baldwin
| Photos by Adrian Cartwright | Icons licensed under <a target="_blank" href="https://github.com/artcoholic/akar-icons/blob/master/LICENSE">MIT License</a> Copyright 2020 Arturo Wibawa</p>
        </div>
    </footer>
`;

const groupInfoTemplate = document.createElement('template');
groupInfoTemplate.innerHTML = `
<style>
    @import url(${pathStart}styles/registration.css)
</style>
    <div class="group-info current" data-card-num="2">
        <h4 class="group-name">Group Name</h4>
        <p class="group-coord">With <span class="bold coord">Tutor Name</span></p>
        <slot name="blurb">
            <p>The group is always on the lookout for new members so don't hesitate to pop in or contact the tutor!</p>
        </slot>
        <p class="times"><span class="name">Group</span> meets on <span class="day">Wednesdays</span> at <span class="time">1:30pm</span> in <span class="locale">M1</span></p>
        <br>
        <a class="btn" href="mailto:music@hvhs.school.nz">Contact</a>
        <div class="group-imgs">
            <img class="group-img" src="${pathStart}assets/photos/squares/prizegiving-jazz-band.jpg">
            <img class="group-img" src="${pathStart}assets/photos/squares/prizegiving-jazz-band.jpg">
            <img class="group-img" src="${pathStart}assets/photos/squares/prizegiving-jazz-band.jpg">
        </div>
    </div>
`;

const staffInfoTemplate = document.createElement('template');
staffInfoTemplate.innerHTML = `
<style>
    @import url(${pathStart}styles/registration.css)
</style>
    <div class="info-card">
        <p class="exit-card">&#x2715; Close</p>                    
        <img class="profilePic" src="" alt="A profile picture of the staff member">
        <div class="details">
            <h3 class="name">Staff Member</h3>
            <p class="role">Role</p>
            <a class="contact" href="mailto:music@hvhs.school.nz">music@hvhs.school.nz</a>
        </div>
        <div class="bio">
            <slot name="bio">
                <p>A bio hasn't been supplied for this staff member.</p>
                <p>Despite this...</p>
            </slot>
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

        this.timeAttr = ['day', 'time', 'locale'];
    }

    static get observedAttributes() {
        return ['name', 'coord', 'contact', 'day', 'time', 'locale'];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if(attrName.toLowerCase() == 'contact') {
            let contactBtn = this.shadowRoot.querySelector(`a`);
            contactBtn.href = `mailto:${newVal}`;
        } else if(this.timeAttr.includes(attrName.toLowerCase())) {
            let timesElement = this.shadowRoot.querySelector(`.times .${attrName}`);
            timesElement.innerHTML = newVal;
        } else if (attrName.toLowerCase() == 'name'){
            let groupNameElement = this.shadowRoot.querySelector(`.group-${attrName}`);
            let timesElement = this.shadowRoot.querySelector(`.times .${attrName}`);
            groupNameElement.innerHTML = newVal;
            timesElement.innerHTML = newVal;
        } else if(attrName.toLowerCase() == 'coord') {
            let element = this.shadowRoot.querySelector(`.group-coord .coord`);
            element.innerHTML = newVal;
        }
    }
}

class StaffInfo extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open'});
        let clone = staffInfoTemplate.content.cloneNode(true);
        shadowRoot.append(clone);

        this.timeAttr = ['day', 'time', 'locale'];
    }

    static get observedAttributes() {
        return ['name', 'role', 'contact', 'profilepic'];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if(attrName.toLowerCase() == 'contact') {
            let contactBtn = this.shadowRoot.querySelector(`.contact`);
            contactBtn.href = `mailto:${newVal}`;
            contactBtn.innerHTML = newVal;
        } else if (attrName.toLowerCase() == 'profilepic'){
            let profilePicElement = this.shadowRoot.querySelector(`.profilePic`);
            profilePicElement.src = newVal;
        } else {
            let element = this.shadowRoot.querySelector(`.${attrName}`);
            element.innerHTML = newVal;
        }
    }
}

/***********************************/
// DEFINE ELEMENTS
/***********************************/
customElements.define('nav-bar', NavBar);
customElements.define('drop-down-menu', DropDown);
customElements.define('custom-footer', CustomFooter);
customElements.define('group-info-card', GroupInfo);
customElements.define('staff-info-card', StaffInfo);