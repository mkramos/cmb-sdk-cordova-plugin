function cmbScanner() {};

// The function that passes work along to native shells
cmbScanner.prototype.startScannning = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'cmbScanner', 'startScannning', []);
};
module.exports = new cmbScanner;
