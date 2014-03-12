angular.module('cordova.services', [])
    .service("AccelerometerService", function () {
        return {};
    })
    .service("CaptureService", function () {
        return {};
    })
    .service("CompassService", function () {
        return {
            promiseCurrentHeading: function () {

            },
            compass: {
                watchHeading: function (callback) {
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
    .service("ContactsService", function () {
        return {};
    })
    .service("EventsService", function () {
        return {};
    })
    .service("FileService", function ($q) {
        return {
            read: function () {

            },
            write: function () {

            }

        }


    })
    .service("GeolocationService", function ($q, $timeout) {
        return {
            promiseCurrentPosition: function () {
                var deferred = $q.defer();
                $timeout(function(){
                    deferred.resolve({ coords: {longitude:1.23, latitude:3.14}})
                },250);
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
    .service("GlobalizationService", function () {
        return {};
    })
    .service("InAppBrowserService", function () {
        return {};
    })
    .service("MediaService", function () {
        return {};
    })
    .service("StorageService",function () {
        return {};
    }).service("CameraService", ['$q', function ($q) {

        window.Camera = {
            DestinationType: {
                FILE_URI: 'FILE_URI'
            },
            EncodingType: {
                JPEG: "JPEG"
            },
            PictureSourceType: {
                CAMERA: "CAMERA"
            }
        };
        var pictures = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png"];
        var currentPicture = -1;
        var camera = {
            getPicture: function (success) {
                currentPicture++;
                success(pictures[currentPicture]);
            }
        };
        var service = {
            camera: camera,
            take: function (params) {
                var deferred = $q.defer();
                setTimeout(function () {
                    currentPicture++;
                    deferred.resolve(pictures[currentPicture]);
                }, 1000);
                return deferred.promise;
            }
        }
        return service;
    }])
    .service("DeviceService", function () {
        return {
            getDevice: function () {
                return {
                    name: 'MOCK',
                    uuid: 'MOCK-MOCK-MOCK'
                }
            }
        };
    })
    .service("NotificationService", function () {
        return {};
    });
