describe("Unit: Testing Mock Camera Services", function () {
    describe("Camera Mock Service:", function () {

        var timeout = null;
        beforeEach(function () {
            module('cordova.services');

            inject(function ($timeout) {
                debugger;
                timeout = $timeout;
            });
        });

        it('should contain a CameraService',
            inject(function (CameraService) {
                expect(CameraService).not.toBe(null);
            }));


    });
});