import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import ReviewInitiator from '../utils/form-review-initiator';

class App {
  constructor({ button, drawer, content, reviewForm }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._reviewForm = reviewForm;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
    ReviewInitiator.init({ form: this._reviewForm });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector('.skip__link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main').focus();
    });

    window.addEventListener('resize', (event) => {
      if (event.target.window.innerWidth >= 600) {
        document.querySelector('.drawer').classList.remove('open');
      }
    });
  }
}

export default App;
