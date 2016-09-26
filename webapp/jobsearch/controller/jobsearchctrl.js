var app = angular.module('sm-skillprofile')
    .controller('jobsearchctrl', function($scope) {
        $scope.searchcontent = "";
        $scope.result = [];
        $scope.resultcount = 0;
        $scope.hidefactor = true;

        $scope.jobs = [{
                companyname: "Wipro Limited",
                designation: "Project Engineer",
                location: "Bangalore",
                salary: "5 lakhs p.a",
                experience: 0,
                skillsrequired: ['jquery', 'javascript'],
                minimumqualification: ['B-tech min 65%'],
                jobdescription: "Sales Trainer would be responsible for the knowledge and skills of Replicon sales team members. An integral part of the Replicon Learning & Development team, the trainer will need to establish and maintain effective working relationships with key stakeholders and consult with them in order to develop and maintain an effective and up to date sales learning curriculum."
            }, {
                companyname: "Delloitte",
                designation: "Junior consultant",
                location: "Bangalore",
                salary: "4 lakhs p.a",
                experience: 1,
                skillsrequired: ['java'],
                minimumqualification: ['B-tech min 75%'],
                jobdescription: "Replicon is searching for self-motivated individuals to join our successful team as a Customer Success Manager (CSM) in our Bangalore office. This opportunity will use your skills as a product expert and a strategic relationship builder to grow and maintain current Replicon Customers."
            }, {
                companyname: "Infosys",
                designation: "HR",
                location: "Mysore",
                salary: "7.5 lakhs p.a",
                experience: 2,
                skillsrequired: ['jquery', 'javascript'],
                minimumqualification: ['B-tech min 60%'],
                jobdescription: "Replicon is searching for self-motivated individuals to join our successful team as a Customer Success Manager (CSM) in our Bangalore office. This opportunity will use your skills as a product expert and a strategic relationship builder to grow and maintain current Replicon Customers."
            }, {
                companyname: "Wipro Limited",
                designation: "Project Engineer",
                location: "Pune",
                salary: "3.2 lakhs p.a",
                experience: 0,
                skillsrequired: ['java', 'javascript', 'jquery'],
                minimumqualification: ['B-tech 65% above'],
                jobdescription: "Replicon is searching for self-motivated individuals to join our successful team as a Customer Success Manager (CSM) in our Bangalore office. This opportunity will use your skills as a product expert and a strategic relationship builder to grow and maintain current Replicon Customers."
            }, {
                companyname: "Microsoft",
                designation: "Project Designer",
                location: "Mumbai",
                salary: "12 lakhs p.a",
                experience: 5,
                skillsrequired: ['jquery', 'javascript', 'azure', 'angular', 'sabkuch aana chahiye'],
                minimumqualification: ['B-tech 85% above'],
                jobdescription: "Replicon is searching for self-motivated individuals to join our successful team as a Customer Success Manager (CSM) in our Bangalore office. This opportunity will use your skills as a product expert and a strategic relationship builder to grow and maintain current Replicon Customers."
            }

        ];

        $scope.findjobs = function(keyword) {
            //re-initialising array to empty
            $scope.result = [];

            // function to search jobs in array of jobs
            $scope.jobs.forEach(function(object, key) {
                if (object.companyname.toUpperCase().includes(keyword.toUpperCase())) {
                    $scope.result.push(object);
                }
                if (keyword == "") {
                    $scope.result = [];
                }
            });

            //storing count of the jobs found
            $scope.resultcount = $scope.result.length;

            //hiding/showing or result label
            if ($scope.resultcount > 0) {
                $scope.hidefactor = false;
            } else {
                $scope.hidefactor = true;
            }
        }

    });
