import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';
import AddReview from '../views/pages/addReview';

const routes = {
  '/': Home, // default page
  '/detail/:id': Detail,
  '/like': Like,
  '/addreview/:id': AddReview,
};

export default routes;
