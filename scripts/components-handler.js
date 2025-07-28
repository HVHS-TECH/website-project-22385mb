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


class NavBar extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open'});
        let clone = navBarTemplate.content.cloneNode(true);

        shadowRoot.append(clone);
    }
}

customElements.define('nav-bar', NavBar);