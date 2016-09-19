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
      if(ctrl.eduDetails[i].institute.type=="college" ||ctrl.eduDetails[i].institute.type=="other")
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
    // $scope.yearval="";

    $scope.years=[];
    for(var i=(new Date()).getFullYear();i>=1900;i--)
    {
      $scope.years.push(i);
    }

    

    
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
      $scope.to=object.to;
      $scope.from=object.from;
      $scope.type=object.institute.type;
      $scope.academicType=object.academicType;
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
      $scope.to=new Date();
      $scope.from=new Date();
      $scope.type="type of institute";
      $scope.academicType="of academic type";
      $scope.type=['school','college','other'];

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
                      "from": $scope.to,
                      "to": $scope.from,
                      "academicType": $scope.academicType,
                      "institute": {
                        "name": $scope.name,
                        "type": $scope.type,
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