class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <div>
            <p>Copyright © 2022 - Finfood</p>
            <p>Made with <i class="fa-solid fa-heart"></i> by Agus Gede Jelantik Mahendra</p>
          </div>
      `;
  }
}

customElements.define('footer-bar', FooterBar);
