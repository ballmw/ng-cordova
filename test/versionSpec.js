describe('version', function() {
    beforeEach(module('cordova.services'));

    it('should return current version', inject(function(CordovaServicesVersion) {
        expect(CordovaServicesVersion).toEqual('0.0.1');
    }));
});