describe("Unit: Testing Mock Geolocation Services", function() {
    describe("Geolocation Mock Service:", function() {

        var timeout = null;
        beforeEach(function() {
            module('cordova.services');

            inject(function ($timeout) {
                timeout = $timeout;
            });
        });

        it('should contain a GeolocationService',
            inject(function(GeolocationService) {
                expect(GeolocationService).not.toBe(null);
            }));

        it('should return a coords position',
            inject(function(GeolocationService) {
                GeolocationService.promiseCurrentPosition().then(function (data) {
                    result = data;
                });

                timeout.flush();
                expect(result.coords.latitude).toBe(3.14);
            }));

    });
});