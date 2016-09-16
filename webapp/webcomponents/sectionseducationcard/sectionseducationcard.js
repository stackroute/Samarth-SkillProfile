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

  ctrl.eduDetails=[];
  ctrl.schools=[];
  ctrl.colleges=[];

$http.get('http://localhost:8081/education/101').then(function(response) 
{
    for (var noOfObjects = 0; noOfObjects < response.data[0].qualification.length; noOfObjects++) {
          for (var record = 0; record < 1; record++) {
            console.log("PEHLA OBJECT",response.data[0].qualification[noOfObjects]);
            ctrl.eduDetails.push(response.data[0].qualification[noOfObjects]);
          }
    }
    console.log("EDUCATION OBJECT MAIN",ctrl.eduDetails);

    for(var i=0;i<ctrl.eduDetails.length;i++)
    {
      if(ctrl.eduDetails[i].institute.type=="school")
      {
        ctrl.schools.push(ctrl.eduDetails[i]);
      }
      if(ctrl.eduDetails[i].institute.type=="college")
      {
        ctrl.eduDetails[i].institute.type="work";
        ctrl.colleges.push(ctrl.eduDetails[i]);
      }
    }

    console.log("schools",ctrl.schools);
    console.log("colleges",ctrl.colleges);

});


  ctrl.showAdvanced = function(ev,header,object) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '/webcomponents/sectionseducationcard/templates/educonvoNEW.html',
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
    
    if(object!='')
    {
      $scope.title=object.title;
      $scope.batch=object.batch;
      $scope.result=object.outcome.result;
      $scope.unit=object.outcome.unit;
      $scope.name=object.institute.name;
      $scope.location=object.institute.location;
      $scope.affiliation=object.institute.affiliation;
      $scope.uniqueID=object._id;
    }
    else
    {

      $scope.title="course";
      $scope.batch="some year";
      $scope.result="some value";
      $scope.unit=" with some unit";
      $scope.name="some educational body";
      $scope.location="some location";
      $scope.affiliation="some controlling body";

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

    
    $scope.save=function(header)
    {
      var education={
          "record": [{
                      "title": $scope.title,
                      "batch": $scope.batch,
                      "from": "march 2009",
                      "to": "april 2010",
                      "academicType": "Metric",
                      "institute": {
                        "name": $scope.name,
                        "type": "school",
                        "location": $scope.location,
                        "affiliation": $scope.affiliation,
                        "metadata": []
                      },
                      "outcome": {
                        "result":$scope.result,
                        "unit": $scope.unit
                      }
          }]
      }

      if(header==("Add Education"))
      {
        $http({
        method:'POST',
        url:'http://localhost:8081/education/101',
        // 'Content-Type':'application/json',
        data:education
      })
      .then(function successCallback(response) {
        alert('Education Added');
        $scope.cancel();

      },
      function errorCallback(response) {
        alert('error');
      });
      }
      if(header=="Edit School"||header=="Edit College")
      {
        $http({
        method:'PATCH',
        url:'http://localhost:8081/education/101/'+$scope.title,
        // 'Content-Type':'application/json',
        data:education
      })
      .then(function successCallback(response) {
        alert('Education Updated');
        $scope.cancel();

      },
      function errorCallback(response) {
        alert('error');
      });
      }
      
    }
  }


}