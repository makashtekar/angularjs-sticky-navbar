(function() {
  const app = angular.module('ghpages', []);
  app.controller('main', ($scope) => {
    $scope.hello = 'hello world!';
  });
})();
