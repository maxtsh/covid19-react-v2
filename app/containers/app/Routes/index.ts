import Home from 'Containers/Home/Lazy';
import Country from 'Containers/Country/Lazy';

const Routes = [
  {
    name: 'Home',
    exact: true,
    path: '/',
    component: Home,
  },
  {
    name: 'Country',
    exact: true,
    path: '/country/:country',
    component: Country,
  },
];

export default Routes;
