import { ComponentType } from 'react';
import Home from '../pages/Home/Home';

interface RouteValue {
  path: string;
  name: string;
  component: ComponentType;
  rolesAllowed?: string[];
  guards?: any;
}

const RoutesStore: { [key: string]: RouteValue } = {
  Home: { path: '/', name: 'Home page', component: Home },
};

export default RoutesStore;