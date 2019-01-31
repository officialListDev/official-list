import Home from './containers/Home';
import Search from './containers/Search/index';

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/other',
    component: Search,
  },
];
