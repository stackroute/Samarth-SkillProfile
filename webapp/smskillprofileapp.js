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
            
        }
    ])

.config(function($mdThemingProvider) {
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
          
          'hue-1':'400'
        })
        .accentPalette('custom',{
          'hue-1':'400'
        })
        
});
