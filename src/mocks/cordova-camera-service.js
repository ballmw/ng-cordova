angular.module('cordova.services').
    service("CameraService", ['$q', function ($q) {

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
    }]);