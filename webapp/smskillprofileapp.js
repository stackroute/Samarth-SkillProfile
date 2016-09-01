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
    ])

.config(function($mdThemingProvider) {
    // $mdThemingProvider.theme('default')
    //     .primaryPalette('grey');
//  $mdThemingProvider.definePalette('custom', {
//   '50': '#ffffff',
//   '100': '#fcdfd4',
//   '200': '#f8b89f',
//   '300': '#f4875c',
//   '400': '#f27240',
//   '500': '#f05d23',
//   '600': '#e54c10',
//   '700': '#c8420e',
//   '800': '#ab390c',
//   '900': '#8f2f0a',
//   'A100': '#ffffff',
//   'A200': '#fcdfd4',
//   'A400': '#f27240',
//   'A700': '#c8420e',
//   'contrastDefaultColor': 'light',
//   'contrastDarkColors': '50 100 200 300 400 500 A100 A200 A400'
// });

$mdThemingProvider.definePalette('custom', {
  '50': '#bef5ff',
  '100': '#72e9ff',
  '200': '#3ae0ff',
  '300': '#00ccf1',
  '400': '#00b2d3',
  '500': '#0098b4',
  '600': '#007e95',
  '700': '#006477',
  '800': '#004a58',
  '900': '#00313a',
  'A100': '#bef5ff',
  'A200': '#72e9ff',
  'A400': '#00b2d3',
  'A700': '#006477',
  'contrastDefaultColor': 'light',
  'contrastDarkColors': '50 100 200 300 400 A100 A200 A400'
});


$mdThemingProvider.theme('default')
        .primaryPalette('custom',{
          // 'default':'200',
          'hue-1':'400'
        })
        .accentPalette('custom',{
          'hue-1':'400'
        })
        
});

/*.config(function($mdThemingProvider) {
   $mdThemingProvider.theme('default')
     .primaryPalette('palegreen', {
       'default': 'A200',
       'hue-1': 'A100',
       'hue-2': '800',
       'hue-3': 'A100'
     })*/