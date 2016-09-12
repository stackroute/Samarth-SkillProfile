angular.module('sm-skillprofile')
    .config(['$stateProvider', '$urlMatcherFactoryProvider', '$urlRouterProvider',
        function($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider) {

            $urlMatcherFactoryProvider.caseInsensitive(true);

            $stateProvider
                .state('skillprofile.signin', {
                    url: '/signin',
                    views: {
                        "content@": {
                            templateUrl: '/auth/templates/signin.html',
                            controller:'signinController'
                        }
                    }
                })
                .state('skillprofile.signup', {
                    url: '/signup',
                    views: {
                        "content@": {
                            templateUrl: '/auth/templates/signup.html',
                            controller:'signupController'
                        }
                    }
                })
                 .state('skillprofile.chnge_password', {
                    url: '/passwordchange',
                    views: {
                        "content@": {
                            templateUrl: '/auth/templates/updatepassword.html',
                            controller:'signinController'
                        }
                    }
                })
                
        }
    ])
