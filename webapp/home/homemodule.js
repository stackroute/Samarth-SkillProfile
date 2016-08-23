angular.module('sm-skillprofile')
    .config(['$stateProvider', '$urlMatcherFactoryProvider', '$urlRouterProvider',
        function($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider) {
            $urlMatcherFactoryProvider.caseInsensitive(true);

            $urlRouterProvider.otherwise('home')

            $stateProvider
                .state('skillprofile', {
                    url: '/home',
                    views: {
                        "content@": {
                            templateUrl: '/auth/templates/signinpage.html'
                        },
                        "navbar": {
                            templateUrl: '/home/templates/navbar.html',
                            controller: 'navCtrl'
                        },
                        "footer": {
                            templateUrl: '/home/templates/footer.html'
                        }
                    }
                })
        }
    ])
