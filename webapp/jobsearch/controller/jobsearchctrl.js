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
                minimumqualification: ['B-tech 65% and above'],
                jobdescription: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Ut pellentesque porttitor magna sed malesuada. Nam rutrum sed massa non mollis. Cras a aliquet nunc. Cras feugiat nulla erat, at facilisis leo ullamcorper vel. Praesent sed lectus nec eros rutrum laoreet sed eget ex. In ac pulvinar velit, eget vulputate mi. Praesent et lobortis sapien. Quisque ac diam ex. Nullam rhoncus tristique ante quis fermentum. Quisque non volutpat est. Donec condimentum tincidunt turpis, sit amet feugiat est finibus in. Praesent efficitur est at velit aliquam accumsan."
            }, {
                companyname: "Delloitte",
                designation: "Junior consultant",
                location: "Bangalore",
                salary: "4 lakhs p.a",
                experience: 1,
                skillsrequired: ['java'],
                minimumqualification: ['B-tech 75% and above'],
                jobdescription: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Ut pellentesque porttitor magna sed malesuada. Nam rutrum sed massa non mollis. Cras a aliquet nunc. Cras feugiat nulla erat, at facilisis leo ullamcorper vel. Praesent sed lectus nec eros rutrum laoreet sed eget ex. In ac pulvinar velit, eget vulputate mi. Praesent et lobortis sapien. Quisque ac diam ex. Nullam rhoncus tristique ante quis fermentum. Quisque non volutpat est. Donec condimentum tincidunt turpis, sit amet feugiat est finibus in. Praesent efficitur est at velit aliquam accumsan."
            }, {
                companyname: "Infosys",
                designation: "HR",
                location: "Mysore",
                salary: "7.5 lakhs p.a",
                experience: 2,
                skillsrequired: ['jquery', 'javascript'],
                minimumqualification: ['B-tech 60% and above'],
                jobdescription: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Ut pellentesque porttitor magna sed malesuada. Nam rutrum sed massa non mollis. Cras a aliquet nunc. Cras feugiat nulla erat, at facilisis leo ullamcorper vel. Praesent sed lectus nec eros rutrum laoreet sed eget ex. In ac pulvinar velit, eget vulputate mi. Praesent et lobortis sapien. Quisque ac diam ex. Nullam rhoncus tristique ante quis fermentum. Quisque non volutpat est. Donec condimentum tincidunt turpis, sit amet feugiat est finibus in. Praesent efficitur est at velit aliquam accumsan."
            }, {
                companyname: "Wipro Limited",
                designation: "Project Engineer",
                location: "Pune",
                salary: "3.2 lakhs p.a",
                experience: 0,
                skillsrequired: ['java', 'javascript', 'jquery'],
                minimumqualification: ['B-tech 65% and above'],
                jobdescription: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Ut pellentesque porttitor magna sed malesuada. Nam rutrum sed massa non mollis. Cras a aliquet nunc. Cras feugiat nulla erat, at facilisis leo ullamcorper vel. Praesent sed lectus nec eros rutrum laoreet sed eget ex. In ac pulvinar velit, eget vulputate mi. Praesent et lobortis sapien. Quisque ac diam ex. Nullam rhoncus tristique ante quis fermentum. Quisque non volutpat est. Donec condimentum tincidunt turpis, sit amet feugiat est finibus in. Praesent efficitur est at velit aliquam accumsan."
            }, {
                companyname: "Microsoft",
                designation: "Project Designer",
                location: "Mumbai",
                salary: "12 lakhs p.a",
                experience: 5,
                skillsrequired: ['jquery', 'javascript', 'azure', 'angular', 'sabkuch aana chahiye'],
                minimumqualification: ['B-tech 85% and above'],
                jobdescription: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Ut pellentesque porttitor magna sed malesuada. Nam rutrum sed massa non mollis. Cras a aliquet nunc. Cras feugiat nulla erat, at facilisis leo ullamcorper vel. Praesent sed lectus nec eros rutrum laoreet sed eget ex. In ac pulvinar velit, eget vulputate mi. Praesent et lobortis sapien. Quisque ac diam ex. Nullam rhoncus tristique ante quis fermentum. Quisque non volutpat est. Donec condimentum tincidunt turpis, sit amet feugiat est finibus in. Praesent efficitur est at velit aliquam accumsan."
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
