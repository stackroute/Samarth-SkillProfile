<<<<<<< HEAD
var app = angular.module("sm-skillprofile", ['ngMaterial',
    'ngAnimate',
    'ngMessages',
    'ui.router',
    'ui.bootstrap'
]);

app.config(['$urlMatcherFactoryProvider',
    function($urlMatcherFactoryProvider) {
        $urlMatcherFactoryProvider.caseInsensitive(true);
    }
]);

app.controller('skillprofilectrl', ['$scope',
    function($scope) {
        $scope.app = "Samarth-SkillProfile";
    }
]);
=======
var myApp = angular.module("sm-skillprofile", ['ngMaterial',
        'ngAnimate',
        'ngMessages',
        'ui.router'
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
>>>>>>> 7bc1f88fd1e361d55b60d6a6ce10cb744a537994
