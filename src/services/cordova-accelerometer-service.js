angular.module('cordova.services')
    .service("AccelerometerService", function () {
        //http://cordova.apache.org/docs/en/3.3.0/cordova_accelerometer_accelerometer.md.html#Accelerometer
        return navigator.accelerometer;
    });