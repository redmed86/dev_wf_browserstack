var browserstack = require("browserstack-local");
//jshint strict: false
exports.config = {
  allScriptsTimeout: 11000,

  seleniumAddress: "http://hub-cloud.browserstack.com/wd/hub",

  specs: ["wells.spec.js"],

  commonCapabilities: {
    "browserstack.user": process.env.BROWSERSTACK_USERNAME,
    "browserstack.key": process.env.BROWSERSTACK_ACCESS_KEY,
    name: "Bstack-[Protractor] Parallel Test",
    build: "Bstack-[Protractor] Parallel Test",
  },

  multiCapabilities: [
    {
      os: "Windows",
      os_version: "10",
      browserName: "Chrome",
      // "browserstack.local": true,
      "browserstack.networkLogs": true,
      "browserstack.console": "errors",
      browser_version: "80.0 beta",
      resolution: "1024x768",
    },
    // {
    //   os: "Windows",
    //   os_version: "10",
    //   browserName: "Chrome",
    //   // "browserstack.local": true,
    //   browser_version: "80.0 beta",
    //   resolution: "1024x768",
    // },
  ],

  onPrepare: function () {
    var caps = browser.getCapabilities();
    console.log(caps);
  },

  //baseUrl: "http://localhost:7225/#!/view1",

  framework: "jasmine",

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },
  onComplete: function () {
    var printSessionId = function (jobName) {
      browser.getSession().then(function (session) {
        console.log("SessionID=" + session.getId() + " job-name=" + jobName);
      });
    };
    printSessionId("Angular/Protractor Demo Test Suite");
  },

  //Code to start browserstack local before start of test
  // beforeLaunch: function() {
  //   console.log("Connecting local");
  //   return new Promise(function(resolve, reject) {
  //     exports.bs_local = new browserstack.Local();
  //     exports.bs_local.start(
  //       { key: exports.config.capabilities["browserstack.key"] },
  //       function(error) {
  //         if (error) return reject(error);
  //         console.log("Connected. Now testing...");

  //         resolve();
  //       }
  //     );
  //   });
  // },

  // Code to stop browserstack local after end of test
  // afterLaunch: function() {
  //   return new Promise(function(resolve, reject) {
  //     exports.bs_local.stop(resolve);
  //   });
  // }
};

// Code to support common capabilities
exports.config.multiCapabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
