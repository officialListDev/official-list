import Home from './containers/Home';
import Search from './containers/Search';

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    component: Search,
  },
  {
    path: '/other',
    component: Search,
  },
];
