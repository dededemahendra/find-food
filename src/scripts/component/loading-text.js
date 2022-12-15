class LoadingText extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="loader">
            <h1>LOADING <span class="bullets">.</span></h1>
          </div>

        `;
  }
}

customElements.define('loading-text', LoadingText);
