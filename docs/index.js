(function() {
  const app = angular.module('ghpages', ['angularResponsiveNavbar', 'ui.router']);
  app.run(navbarRouteService => {
    // navbarRouteService.enableAlwaysDesktop();
    navbarRouteService.setTitle('Angular-Navbar', {
      title: 'Home',
      state: 'hello',
      url: '/'
    });
    navbarRouteService.setRoutes([{
      title: 'Hello',
      state: 'hello',
      url: '/'
    },
    {
      title: 'Goodbye',
      state: 'goodbye',
      url: '/goodbye'
    }]);
  });
  app.controller('main', ($scope) => {
    $scope.hello = 'hello world!';
  });
})();
