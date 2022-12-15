class FavoriteMessage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="not-favorite">
            <div class="not-favorite__wrapper">
                <h1 class="favorite__message">You don't have a favorite restaurant</h1>
                <p>Please find your favorite restaurant and like it</p>
            </div>
        </div>
      `;
  }
}

customElements.define('favorite-message', FavoriteMessage);
