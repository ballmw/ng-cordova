angular.module('cordova.services')
    .service("GeolocationService", function ($q, $timeout) {
        return {
            promiseCurrentPosition: function () {
                var deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve({ coords: {longitude: 1.23, latitude: 3.14}})
                }, 250);
                return deferred.promise;
            },
            geolocation: {
                watchPosition: function (callback) {
                    setTimeout(function () {
                        callback({});
                    }, 1000);
                    return "WATCHID";
                },
                clearWatch: function () {
                }
            }
        };
    })