let MobileDetect = require('mobile-detect');

let detect = new MobileDetect(window.navigator.userAgent)

let mobileVersion = detect.mobile() ? true : false;

export default mobileVersion;