angular.module('sm-skillprofile')
    .config(['$stateProvider', '$urlMatcherFactoryProvider', '$urlRouterProvider',
        '$compileProvider',
        function($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider,
            $compileProvider) {
            $urlMatcherFactoryProvider.caseInsensitive(true);

            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('skillprofile', {
                    url: '/home',
                    views: {
                        "content@": {
                            templateUrl: '/auth/templates/signinpage.html',
                            controller: 'signinpageCtrl'
                        },
                        "navbar": {
                            templateUrl: '/home/templates/navbar.html',
                            controller: 'navCtrl'
                        },
                        "footer": {
                            templateUrl: '/home/templates/footer.html'
                        }
                    }
                });

            $compileProvider.aHrefSanitizationWhitelist(/^\s*(|blob|):/);
        }
    ])
