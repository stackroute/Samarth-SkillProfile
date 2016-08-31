var app=angular
    .module('sm-skillprofile')
    .component('myEducationcard',
    {
      templateUrl:'/webcomponents/sectionseducationcard/templates/sectionseducationcard.html',
      controller:educationCardController

    });

function educationCardController($mdDialog,$http)
{
  var ctrl=this;
  ctrl.school="";
  ctrl.location="";
  ctrl.board="";
  ctrl.to="";
  ctrl.standard="";

  ctrl.eduDetails={};
  ctrl.schools=[];
  ctrl.colleges=[];

  $http.get('http://localhost:8081/profiles/01').then(function(response) 
          {
            for(var prop in response.data)
            {
              if(prop=="Education")
              {
                ctrl.eduDetails[prop]=response.data[prop];
              }
            }
            for(var prop in ctrl.eduDetails)
            {
              for(var key in ctrl.eduDetails[prop])
              {
                 for(var k in ctrl.eduDetails[prop][key])
                  {
                    if(ctrl.eduDetails[prop][key][k]=="school")
                    {
                      ctrl.schools.push(ctrl.eduDetails[prop][key]);
                    }
                    if(ctrl.eduDetails[prop][key][k]=="work")
                    {
                      ctrl.colleges.push(ctrl.eduDetails[prop][key]);
                    }
                  }
              }
            }
          });

  ctrl.showAdvanced = function(ev,header,object) {
      $mdDialog.show({
                      controller: DialogController,
                      templateUrl: '/webcomponents/sectionseducationcard/templates/educationconversation.html',
                      parent: angular.element(document.body),
                      targetEvent: ev,
                      clickOutsideToClose:true,
                      locals:
                      {
                        header:header,
                        object:object
                      }
      })
      .then(
        function(answer) {},
        function() {}
        );
  };

  function DialogController($scope, $mdDialog,$http,header,object) {
    $scope.header=header;
    // console.log(object.Titleofeducation.length);
    
    $scope.calculatelength=function(str)
    {
      console.log("inside func");
      console.log(str.length);
      return str.length;
    }
    // $scope.size=$scope.calculatelength(str);
    
    if(object!='')
    {
      $scope.Titleofeducation=object.Titleofeducation;
      $scope.Completionyear=object.Completionyear;
      $scope.Percentage=object.Percentage;
      $scope.Name=object.Name;
      $scope.Location=object.Location;
      $scope.Affiliation=object.Affiliation;
    }
    else
    {
      $scope.Titleofeducation="my course";
      $scope.Completionyear="some year";
      $scope.Percentage="some value";
      $scope.Name="some college";
      $scope.Location="at some location";
      $scope.Affiliation="some controlling body";
    }
    

    // $scope.object=object;
    $scope.object={
                    "Titleofeducation":$scope.Titleofeducation,
                    "Completionyear":$scope.Completionyear,
                    "Percentage":$scope.Percentage,
                    "Name":$scope.Name,
                    "Location":$scope.Location,
                    "Affiliation":$scope.Affiliation

    }
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };

    $scope.educationobj={
             School:ctrl.school,
             Location:ctrl.location,
             Board:ctrl.board,
             To:ctrl.to,
             Standard:ctrl.standard
           }

  $scope.save=function()
  {
    console.log(ctrl.educationobj);
    $http({
            method:'POST',
            url:'http://localhost:8081/profiles',
           'Content-Type':'application/json',
            data:ctrl.educationobj
         })
         .then(function successCallback(response) {
              alert('success');
              },
              function errorCallback(response) {
              alert('error');
            });
  }
  }

}