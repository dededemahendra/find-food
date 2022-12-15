class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav>
            <button class="hamburger" aria-label="Show menu">
            <i class="fa-solid fa-bars"></i>
            </button>
            <section class="drawer">
            <a href="/#">Home</a>
            <a href="/#/favorite">Favorite</a>
            <a href="https://github.com/dededemahendra" target="_blank" rel="noopener noreferrer">About</a>
            </section>
        </nav>
    `;
  }
}

customElements.define('navigation-bar', NavigationBar);
