angular.module('cordova.services', [])
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

    .service("GlobalizationService", function () {
        return {};
    })
    .service("InAppBrowserService", function () {
        return {};
    })
    .service("MediaService", function () {
        return {};
    })
    .service("StorageService", function () {
        return {};
    })
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
