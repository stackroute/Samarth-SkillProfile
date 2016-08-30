 angular.module("sm-skillprofile")
     .controller('navCtrl', ['$scope', '$mdSidenav',
         function($scope, $mdSidenav) {


             $scope.togglemenu = buildToggler('left');

             function buildToggler(navID) {
                 return function() {
                     $mdSidenav(navID)
                         .toggle()
                         .then(function() {});
                 }
             }


             $scope.selectlang="English";
            $scope.language=['English','Hindi','Telugu','Tamil','Punjabi','Gujarati'];
            console.log("lang"+$scope.selectlang);
  }]);           
    