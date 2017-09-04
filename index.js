import NavbarRouteService from './navbarRoute';
import { Navbar } from './navbar';

export const angularNavbarModule = 'angularResponsiveNavbar';

window.angular
  .module(angularNavbarModule, [])
  .service('navbarRouteService', NavbarRouteService)
  .component('angularNavbar', Navbar);
