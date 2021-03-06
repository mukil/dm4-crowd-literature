angular.module("crowd")
.controller("PersonController", function($scope, $routeParams, crowdService) {
    crowdService.getPerson($routeParams.personId, function(response) {
        $scope.person = response.data;
        $scope.sortEvents($scope.person.events);
    })
})
.controller("InstitutionController", function($scope, $routeParams, crowdService) {
    crowdService.getInstitution($routeParams.instId, function(response) {
        $scope.institution = response.data;
        $scope.sortEvents($scope.institution.events);
    })
})
.controller("WorkController", function($scope, $routeParams, crowdService) {
    crowdService.getWork($routeParams.workId, function(response) {
        $scope.work = response.data;
    })
})
.controller("EventController", function($scope, $routeParams, crowdService) {
    var eventId = $routeParams.eventId;
    $scope.setMapVisibility(false);
    $scope.setSelectedEvent(eventId);
    crowdService.getEvent(eventId, function(response) {
        $scope.event = response.data;
    });
})
.controller("EventSeriesController", function($scope, $routeParams, crowdService) {
    crowdService.getEventSeries($routeParams.eventSeriesId, function(response) {
        $scope.eventSeries = response.data;
        $scope.sortEvents($scope.eventSeries.events);
    })
})
