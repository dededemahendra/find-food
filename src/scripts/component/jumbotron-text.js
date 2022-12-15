class JumbotronText extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <section class='jumbotron__wrapper'>
            <h1 class='jumbotron__logo'>FINDFOOD</h1>
            <p class='jumbotron__title'>
              Find Your Favorite Restaurant
            </p>
            <p class='jumbotron__subtitle'>
              Start experiencing something that you <br />
              have never experienced before
            </p>
            <a href='#restaurant__title' class='jumbotron__button'>Start Explore</a>
          </section>`;
  }
}

customElements.define('jumbotron-text', JumbotronText);
