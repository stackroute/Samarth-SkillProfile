angular.module('sm-skillprofile')
    .config(['$stateProvider', '$urlMatcherFactoryProvider', '$urlRouterProvider',
        function($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider) {

            $urlMatcherFactoryProvider.caseInsensitive(true);

            $stateProvider
                .state('skillprofile.jobsearch', {
                    url: '/jobsearch',
                    views: {
                        "content@": {
                            templateUrl: '/jobsearch/templates/jobsearch.html',
                            controller: 'jobsearchctrl',
                            controllerAs: 'jobCtrl'
                        }
                    }
                })
        }
    ])
