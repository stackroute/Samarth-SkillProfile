angular.module('sm-skillprofile')
    .config(['$stateProvider', '$urlMatcherFactoryProvider','$urlRouterProvider',
        function($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider) {

            $urlMatcherFactoryProvider.caseInsensitive(true);

            $stateProvider
                .state('skillprofile.skillhome', {
                    url: '/skillhome',
                    views: {
                        "content@": {
                            templateUrl: '/skillhome/templates/skillhome.html',
                            controller: 'skillhomectrl',
                            controllerAs: 'sklCtrl'
                        }
                    }
                })
        }
    ])
