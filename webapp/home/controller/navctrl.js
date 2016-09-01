 angular.module("sm-skillprofile")
     .controller('navCtrl', ['$scope', '$mdSidenav',
         function($scope, $mdSidenav) {

            $scope.user = {
                name: 'Chandra Kumar Pratap'
            }

            $scope.portfolio = {
                completion: "40"
            };

             $scope.togglemenu = buildToggler('left');

             function buildToggler(navID) {
                 return function() {
                     $mdSidenav(navID)
                         .toggle()
                         .then(function() {});
                 }
             }


             $scope.selectlang="English";


            $scope.language=['English','Hindi','Telgu','Tamil','Punjabi','Gujrati'];

            $scope.$watch('selectlang', function(lang) 
            {
                console.log(lang+" content will change..  under construction"); 
            });


            console.log("lang"+$scope.selectlang);
  }]);           
    