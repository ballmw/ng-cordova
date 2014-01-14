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
    .service("FileService", function () {
        return {};
    })
    .service("GeolocationService", function () {
        return {
            promiseCurrentPosition: function () {

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
        var pictures = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"];
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
