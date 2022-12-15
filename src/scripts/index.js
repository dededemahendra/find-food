import 'regenerator-runtime';
import './component/footer-bar';
import './component/navigation-bar';
import './component/favorite-message';
import '../styles/main.scss';
import '../styles/responsive.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('.drawer'),
  content: document.querySelector('#main'),
  searchForm: document.querySelector('#searchForm'),
  reviewForm: document.querySelector('#reviewForm'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
