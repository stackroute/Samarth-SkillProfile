 angular.module("sm-skillprofile")
     .controller('navCtrl', ['$scope', '$mdSidenav', '$rootScope', 'datagenerate',
         function($scope, $mdSidenav, $rootScope, datagenerate) {

             $scope.jqueryScrollbarOptions = {
                 "onScroll": function(y, x) {
                     if (y.scroll == y.maxScroll) {
                         alert('Scrolled to bottom');
                         console.log("hi");
                     }
                 }
             };
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

             $scope.selectlang = "English";
             $scope.language = ['English', 'Hindi'];
             $scope.onChange = function() {
                 console.log($scope.selectlang);
                 //$scope.loadLangData($scope.selectlang);
                 $rootScope.$emit("lang_changed", { language: $scope.selectlang })
             };
             // $scope.onChange();

             $scope.loadLangData = function(lang) {
                 datagenerate.getjson("nav", lang).then(function(result) {
                     // console.log(JSON.stringify(result));
                     $scope.title = result.header;
                     console.log("inside card1");
                     console.log(result.header);

                 }); //end datagenerate
             }
             $scope.loadLangData($scope.selectlang);

             $rootScope.$on("lang_changed", function(event, data) {
                 console.log("User switch to language ", data.language);
                 $scope.loadLangData(data.language);

             });
         }
     ]);
