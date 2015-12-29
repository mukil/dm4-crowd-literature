angular.module("crowd").controller("InstitutionController", function($scope, $routeParams, crowdService) {
    var instId = $routeParams.instId;
    crowdService.getInstitution(instId, function(response) {
        $scope.institution = response.data;
    })
    crowdService.getInstitutionPersons(instId, function(response) {
        $scope.persons = response.data.items;
    })
})