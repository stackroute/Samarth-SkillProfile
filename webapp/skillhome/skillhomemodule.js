angular.module('sm-skillprofile')
    .config(['$stateProvider', '$urlMatcherFactoryProvider', '$urlRouterProvider',
        function($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider) {

            $urlMatcherFactoryProvider.caseInsensitive(true);

            $stateProvider
                .state('skillprofile.skillhome', {
                    url: '/skillhome',
                    views: {
                        "content@": {
                            templateUrl: '/skillhome/templates/skillhomecontent.html'
                            /*controller: 'skillhomecontentctrl',
                            controllerAs: 'skillcontentCtrl'*/
                        },
                        "sidebar@": {
                            templateUrl: '/home/templates/sidebar.html',
                            controller: 'navCtrl'
                        },
                        "content2@":{
                             templateUrl: '/skillhome/templates/skillhome.html',
                            controller: 'skillhomectrl',
                            controllerAs: 'skillCtrl'
                        }
                    }
                })
                .state('skillprofile.searchjob', {
                    url: '/search',
                    views: {
                        "content2@": {
                            templateUrl: '/skillhome/templates/jobsearch.html'
                        }
                    }
                })
                .state('skillprofile.workexperience', {
                    url: '/workexperience',
                    views: {
                        "content2@": {
                            template: "<my-workexperiencecard></my-workexperiencecard>"
                        }
                        ,
                        "content@": {
                            templateUrl: '/skillhome/templates/skillhomecontent.html'
                            /*controller: 'skillhomecontentctrl',
                            controllerAs: 'skillcontentCtrl'*/
                        },
                        "sidebar@": {
                            templateUrl: '/home/templates/sidebar.html',
                            controller: 'navCtrl'
                        }
                    }
                }).state('skillprofile.projects', {
                    url: '/projects',
                    views: {
                        "content2@": {
                            template:"<my-projectsectioncard></my-projectsectioncard>"
            
                        },
                        "content@": {
                            templateUrl: '/skillhome/templates/skillhomecontent.html'
                            /*controller: 'skillhomecontentctrl',
                            controllerAs: 'skillcontentCtrl'*/
                        },
                        "sidebar@": {
                            templateUrl: '/home/templates/sidebar.html',
                            controller: 'navCtrl'
                        }
                    }
                }).state('skillprofile.skills', {
                    url: '/skills',
                    views: {
                        "content2@": {
                            template: "<mysection-skill-card></mysection-skill-card>"
                        },
                        "content@": {
                            templateUrl: '/skillhome/templates/skillhomecontent.html'
                            /*controller: 'skillhomecontentctrl',
                            controllerAs: 'skillcontentCtrl'*/
                        },
                        "sidebar@": {
                            templateUrl: '/home/templates/sidebar.html',
                            controller: 'navCtrl'
                        }
                    }
                }).state('skillprofile.education', {
                    url: '/education',
                    views: {
                        "content2@": {
                            template:  "<my-educationcard></my-educationcard>"
                        },
                        "content@": {
                            templateUrl: '/skillhome/templates/skillhomecontent.html'
                            /*controller: 'skillhomecontentctrl',
                            controllerAs: 'skillcontentCtrl'*/
                        },
                        "sidebar@": {
                            templateUrl: '/home/templates/sidebar.html',
                            controller: 'navCtrl'
                        }
                    }
                }).state('skillprofile.personalinfo', {
                    url: '/personalinfo',
                    views: {
                        "content2@": {
                            template:  "<my-personalinfocard></my-personalinfocard>"
                        },
                        "content@": {
                            templateUrl: '/skillhome/templates/skillhomecontent.html'
                            /*controller: 'skillhomecontentctrl',
                            controllerAs: 'skillcontentCtrl'*/
                        },
                        "sidebar@": {
                            templateUrl: '/home/templates/sidebar.html',
                            controller: 'navCtrl'
                        }
                    }
                })
        }
    ])
