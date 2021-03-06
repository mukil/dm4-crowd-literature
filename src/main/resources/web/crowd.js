angular.module("crowd", ["ngRoute", "leaflet-directive"])
.config(function($routeProvider) {
    $routeProvider
        .when("/start",               {templateUrl: "views/start.html",        controller: "StartController"})
        .when("/map",                 {template:    "",                        controller: "MapController"})
        .when("/person/:personId",    {templateUrl: "views/person.html",       controller: "PersonController"})
        .when("/institution/:instId", {templateUrl: "views/institution.html",  controller: "InstitutionController"})
        .when("/work/:workId",        {templateUrl: "views/work.html",         controller: "WorkController"})
        .when("/event/:eventId",      {templateUrl: "views/event.html",        controller: "EventController", resolve: {
            // wait for all events to be loaded before selecting an event marker programmatically
            allEvents: function($rootScope) {
                return $rootScope.allEvents;
            }
        }})
        .when("/event_series/:eventSeriesId",
                                      {templateUrl: "views/event-series.html", controller: "EventSeriesController"})
        .otherwise({redirectTo: "/start"})
})
.config(function($logProvider) {
    $logProvider.debugEnabled(false);
})
.config(function($httpProvider) {
    // console.log("Configuring request/response interceptors")
    $httpProvider.useLegacyPromiseExtensions(false);
    $httpProvider.interceptors.push(function($injector) {
        var $http
        return {
            request: function(config) {
                // console.log("Loading starts")
                setSpinnerDisplay("block")
                return config
            },
            response: function(response) {
                $http = $http || $injector.get("$http")     // getting $http lazily avoids circular dependency
                if (!$http.pendingRequests.length) {
                    // console.log("Loading complete")
                    setSpinnerDisplay("none")
                }
                return response
            }
        }

        function setSpinnerDisplay(display) {
            document.getElementById("spinner").style.display = display
        }
    })
})
