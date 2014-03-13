angular.module('cordova.services')
.service("GeolocationService", ['$q', '$log', function ($q, $log) {

    var service = {
        promiseCurrentPosition: function (geolocationOptions) {
            var deferred = $q.defer();
            $log.debug("GeolocationService: promiseCurrentPosition" );
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    $log.debug("GeolocationService: success" );
                    deferred.resolve(position);
                },
                function (error) {
                    $log.debug("GeolocationService: error" );
                    deferred.reject(error);
                },
                geolocationOptions
            );

            $log.debug("GeolocationService: return promise" );
            return deferred.promise;
        },
        geolocation: navigator.geolocation
    }

    return service;

}])