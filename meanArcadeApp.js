var app = angular.module("meanArcadeApp",['ui.bootstrap']);
app.run(function($templateCache,$http) {
   var partials = [
      '_containerModalContent.html',
   ];
   angular.forEach(partials, function (p,i) {
      $http.get('/templates/'+p, {cache:$templateCache});
   });
});
