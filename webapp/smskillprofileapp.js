var myApp = angular.module("sm-skillprofile", ['ngMaterial',
        'ngAnimate',
        'ngMessages',
        'ui.router',
        'ui.bootstrap'
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