angular.module('cordova.services')
    .service("CaptureService", ['DeviceService', function (DeviceService) {
        return {
            getCapture: function () {
                return navigator.device.capture;
            }
        };
    }])
    .service("CompassService", ['$q', '$log', function ($q, $log) {
        //http://cordova.apache.org/docs/en/3.3.0/cordova_compass_compass.md.html#Compass
        var service = {
            promiseCurrentHeading: function (compassOptions) {
                console.log('CompassService: current Heading');
                $log.debug('CompassService: current Heading');
                console.log('CompassService: after current Heading');
                var deferred = $q.defer();
                navigator.compass.getCurrentHeading(
                    function onSuccess(heading) {
                        deferred.resolve(heading);
                    },
                    function onError(error) {
                        deferred.resolve(error);
                    },
                    compassOptions);
                return deferred.promise;
            },
            compass: navigator.compass
        }
        return service;
    }])
    .service("ContactsService", function () {
        return navigator.contacts;
    })
    .service("DeviceService", function () {
        return {
            getDevice: function () {
                return window.device
            }
        }
    })
    .service("EventsService", ['$log', function ($log) {
        var bind = function (eventName, callback) {
            $log.debug('EventsService: binding event:' + eventName)
            window.addEventListener(eventName, callback, false);
        };

        var bindWrapper = function (callback) {
            bind(arguments.callee.name, callback);
        }

        var unbind = function (eventName, callback) {
            $log.debug('EventsService: unbinding event:' + eventName)
            window.removeEventListener(eventName, callback, false);
        };

        var unbindWrapper = function (callback) {
            bind(arguments.callee.name, callback);
        }

        var service = {
            bind: {
                deviceready: bindWrapper,
                pause: bindWrapper,
                resume: bindWrapper,
                online: bindWrapper,
                offline: bindWrapper,
                backbutton: bindWrapper,
                batterycritical: bindWrapper,
                batterylow: bindWrapper,
                batterystatus: bindWrapper,
                menubutton: bindWrapper,
                searchbutton: bindWrapper,
                startcallbutton: bindWrapper,
                endcallbutton: bindWrapper,
                volumedownbutton: bindWrapper,
                volumeupbutton: bindWrapper
            },
            unbind: {
                deviceready: unbindWrapper,
                pause: unbindWrapper,
                resume: unbindWrapper,
                online: unbindWrapper,
                offline: unbindWrapper,
                backbutton: unbindWrapper,
                batterycritical: unbindWrapper,
                batterylow: unbindWrapper,
                batterystatus: unbindWrapper,
                menubutton: unbindWrapper,
                searchbutton: unbindWrapper,
                startcallbutton: unbindWrapper,
                endcallbutton: unbindWrapper,
                volumedownbutton: unbindWrapper,
                volumeupbutton: unbindWrapper
            }};

        return service;
    }])
    .service("FileService", function ($q) {
        return {
            read: function (file) {

                var deferred = $q.defer();

                var fail = function (error) {
                    console.log(error.code);
                    deferred.reject(error);
                };

                var gotFS = function (fileSystem) {
                    fileSystem.root.getFile(file, null, gotFileEntry, fail);
                }

                var gotFileEntry = function (fileEntry) {
                    fileEntry.file(gotFile, fail);

                }

                function readAsText(file) {
                    var reader = new FileReader();
                    reader.onloadend = function (evt) {
                        console.log("Read as text");
                        console.log(evt.target.result);
                        deferred.resolve(evt.target.result);
                    };
                    reader.readAsText(file);
                };

                function gotFile(file) {
                    readAsText(file);
                }

                window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);

                return deferred.promise;
            },
            write: function (file, data) {

                var deferred = $q.defer();

                var fail = function (error) {
                    console.log(error.code);
                    deferred.reject(error);
                };

                var gotFS = function (fileSystem) {
                    fileSystem.root.getFile(file, null, gotFileEntry, fail);
                }

                var gotFileEntry = function (fileEntry) {
                    fileEntry.createWriter(win, fail);
                }

                function win(writer) {
                    writer.onwrite = function (event) {
                        console.log("write success:"+event);
                        deferred.resolve(data);
                    };
                    writer.write(data);
                };

                window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);

                return deferred.promise;
            }
        };
    })
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
    .service("GlobalizationService", function () {
        return {};
    })
    .service("InAppBrowserService", function () {
        return {};
    })
    .service("MediaService", function () {
        return {};
    })
    .service("NotificationService", function () {
        return navigator.notification;
    })
    .service("StorageService", function () {
        return {};
    });
