angular.module('sm-skillprofile')
    .component('myProfilesection', {
        templateUrl: 'webcomponents/profilesection/profilesection.html',
        controller: profilesectionctrl
    });

function profilesectionctrl($http) {
    var ctrl = this; 
    ctrl.active = true;

   // ctrl.accordianData = [ {  "heading": "HOLDEN",   "content": "GM Holden Ltd, commonly known as Holden, is an Australian automaker that operates in Australasia and is headquartered in Port Melbourne, Victoria. The company was founded in 1856 as a saddlery manufacturer in South Australia."  },  {  "heading": "FORD",   "content": "The Ford Motor Company (commonly referred to as simply Ford) is an American multinational automaker headquartered in Dearborn, Michigan, a suburb of Detroit. It was founded by Henry Ford and incorporated on June 16, 1903."  },  {  "heading": "TOYOTA",   "content": "Toyota Motor Corporation is a Japanese automotive manufacturer which was founded by Kiichiro Toyoda in 1937 as a spinoff from his father's company Toyota Industries, which is currently headquartered in Toyota, Aichi Prefecture, Japan."  } ];

    // ctrl.data1 = {};
    // ctrl.collapseAll = function(data) {

    //     for (var i in ctrl.profile) {
    //         if (ctrl.profile[i] != data) {
    //             ctrl.profile[i].expanded = false; 
    //         }
    //     }
    //     data.expanded = !data.expanded;
    // };  

    ctrl.value = 40;
    ctrl.profile = {}; 
    $http({  method: "get",  url: "http://localhost:8081/profiles/01",   }).then(function mySucces(response)  { 
        for (var prop in response.data)  { 
            if (prop != "id" && prop != "UserName")  {  ctrl.profile[prop] = response.data[prop];  }
            // ctrl.profile=response.data;
             
        }  
    }, function myError(response) {  alert('error');  });
}
