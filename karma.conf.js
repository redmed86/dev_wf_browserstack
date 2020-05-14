//jshint strict: false
module.exports = function (config) {
  config.set({
    basePath: "./app",
    hostname: "bs-local.com",

    files: [
      "bower_components/angular/angular.js",
      "bower_components/angular-route/angular-route.js",
      "bower_components/angular-mocks/angular-mocks.js",
      "components/**/*.js",
      "view*/**/*.js",
    ],

    autoWatch: true,

    frameworks: ["jasmine"],

    plugins: [
      "karma-jasmine",
      "karma-junit-reporter",
      "karma-browserstack-launcher",
    ],
    reporters: ["junit"],

    junitReporter: {
      outputDir: "karma_junit_reports",
      suite: "unit",
    },

    browserStack: {
      username: process.env.BROWSERSTACK_USERNAME,
      accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
      apiClientEndpoint: "https://api.browserstack.com",
    },

    // define browsers
    customLaunchers: {
      bs_firefox_mac: {
        base: "BrowserStack",
        browser: "firefox",
        browser_version: "70.0",
        os: "OS X",
        os_version: "High Sierra",
        build: "Angular JS App - Local",
      },
      bs_chrome_mac: {
        base: "BrowserStack",
        browser: "chrome",
        browser_version: "78.0",
        os: "OS X",
        os_version: "High Sierra",
        build: "Angular JS App - Local",
      },
      bs_firefox_win10: {
        base: "BrowserStack",
        browser: "firefox",
        browser_version: "70.0",
        os: "Windows",
        os_version: "10",
        build: "Angular JS App - Local",
      },
      bs_chrome_win10: {
        base: "BrowserStack",
        browser: "chrome",
        browser_version: "78.0",
        os: "Windows",
        os_version: "10",
        build: "Angular JS App - Local",
      },
      bs_android: {
        base: "BrowserStack",
        device: "Samsung Galaxy S10",
        os: "Android",
        real_mobile: true,
        os_version: "9.0",
        build: "Angular JS App - Local",
      },
      bs_ios: {
        base: "BrowserStack",
        device: "iPhone XS",
        os: "ios",
        real_mobile: true,
        os_version: "12",
        build: "Angular JS App - Local",
      },
    },

    captureTimeout: 3e5,
    browserDisconnectTolerance: 0,
    browserDisconnectTimeout: 3e5,
    browserSocketTimeout: 1.2e5,
    browserNoActivityTimeout: 3e5,

    browsers: [
      "bs_firefox_mac",
      "bs_chrome_mac",
      "bs_firefox_win10",
      "bs_chrome_win10",
      "bs_android",
      "bs_ios",
    ],
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
  });
};
