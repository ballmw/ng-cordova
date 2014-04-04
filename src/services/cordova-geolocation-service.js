angular.module('cordova.services')
.service("GeolocationService", ['$q', '$log', function ($q, $log) {
    var watcher;
    
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
        geolocation: navigator.geolocation,
        watchCurrentPosition: function (geolocationOptions) {
            var deferred = $q.defer();
            
            $log.debug("GeolocationService: promiseCurrentPosition" );
            watcher = navigator.geolocation.watchCurrentPosition(
                function (position) {
                    $log.debug("GeolocationService: success" );
                    deferred.notify({position: position, watcher: watcher});
                },
                function (error) {
                    $log.debug("GeolocationService: error" );
                    deferred.reject({error: error, watcher: watcher});
                },
                geolocationOptions
            );
            
            $log.debug("GeolocationService: return promise" );
            //*** This promise is never resolved since watch will always stay alive.
            return deferred.promise;
        },
        stopWatcher: function () {
            if (watcher) {
                navigator.geolocation.clearWatch(watcher);
            }
        }
    }

    return service;

}])
