var myApp = angular.module("sm-skillprofile", ['ngMaterial',
        'ngAnimate',
        'ngMessages',
        'ui.router',
       

    ])
    .config(['$urlMatcherFactoryProvider',
        function($urlMatcherFactoryProvider) {
            $urlMatcherFactoryProvider.caseInsensitive(true);
        }
    ])
    .controller('sm-skillprofilectrl', ['$scope',
        function($scope) {
            //TBD
        }
    ]);