import HomePage from '../views/pages/home-page';
import FavoritePage from '../views/pages/favorite-page';
import DetailPage from '../views/pages/detail-page';

const routes = {
  '/': HomePage,
  '/favorite': FavoritePage,
  '/detail/:id': DetailPage,
};

export default routes;
