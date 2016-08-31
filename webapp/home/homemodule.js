angular.module('sm-skillprofile')
    .config(['$stateProvider', '$urlMatcherFactoryProvider', '$urlRouterProvider',
        function($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider) {
            $urlMatcherFactoryProvider.caseInsensitive(true);

            $urlRouterProvider.otherwise('/home/skillhome');

            $stateProvider
                .state('skillprofile', {
                    url: '/home',
                    views: {
                        "content@": {
                            // templateUrl: '/auth/templates/signinpage.html'
                            templateUrl: '/skillhome/templates/skillhome.html'
                        },
                        "navbar": {
                            templateUrl: '/home/templates/navbar.html',
                            controller: 'navCtrl'
                        },
                        "footer": {
                            templateUrl: '/home/templates/footer.html'
                        },
                        "sidebar": {
                            templateUrl: '/home/templates/sidebar.html',
                            controller: 'navCtrl'
                        }
                    }
                })
        }
    ])
