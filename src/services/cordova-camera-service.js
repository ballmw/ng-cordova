angular.module('cordova.services')
    .service("CameraService", ['$q', '$log', function ($q, $log) {
        //http://cordova.apache.org/docs/en/3.3.0/cordova_camera_camera.md.html#Camera
        var service = {

            camera: navigator.camera,
            take: function (cameraOptions) {
                $log.debug('CameraService: taking picture');
                var deferred = $q.defer();
                navigator.camera.getPicture(
                    function (imageURI) {
                        $log.debug('CameraService: took picture :' + imageURI);
                        deferred.resolve(imageURI);
                    },
                    function (message) {
                        $log.debug('CameraService: failed to take picture :' + message);
                        deferred.reject(message);
                    },
                    cameraOptions
                );
                return deferred.promise;
            }
        }
        return service;
    }])