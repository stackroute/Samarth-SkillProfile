angular.module('sm-skillprofile')
    .config(['$stateProvider', '$urlMatcherFactoryProvider', '$urlRouterProvider',
        function($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider) {

            $urlMatcherFactoryProvider.caseInsensitive(true);

            $stateProvider
                .state('skillprofile.skillhome', {
                    url: '/skillhome',
                    views: {
                        "content@": {
                            templateUrl: '/skillhome/templates/skillhome.html',
                            controller: 'skillhomectrl',
                            controllerAs: 'skillCtrl'
                        }
                    }
                })
                .state('skillprofile.workexperience', {
                    url: '/workexperience',
                    views: {
                        "content@": {
                            template: "<my-workexperiencecard></my-workexperiencecard>"
                        }
                    }
                }).state('skillprofile.projects', {
                    url: '/projects',
                    views: {
                        "content@": {
                            template:"<my-projectsectioncard></my-projectsectioncard>"
            
                        }
                    }
                }).state('skillprofile.skills', {
                    url: '/skills',
                    views: {
                        "content@": {
                            template: "<mysection-skill-card></mysection-skill-card>"
                        }
                    }
                }).state('skillprofile.education', {
                    url: '/education',
                    views: {
                        "content@": {
                            template:  "<my-educationcard></my-educationcard>"
                        }
                    }
                })
        }
    ])
