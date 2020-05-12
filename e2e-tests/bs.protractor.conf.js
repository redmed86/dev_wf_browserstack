//jshint strict: false
exports.config = {
  allScriptsTimeout: 11000,

  seleniumAddress: "http://hub-cloud.browserstack.com/wd/hub",

  specs: ["*.spec.js"],

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
      "browserstack.local": true,
      browser_version: "80.0 beta",
      resolution: "1024x768",
    },
    {
      os: "Windows",
      os_version: "10",
      browserName: "Chrome",
      "browserstack.local": true,
      browser_version: "79.0 beta",
      resolution: "1024x768",
    },
  ],

  onPrepare: function () {
    var caps = browser.getCapabilities();
    console.log(caps);
  },

  framework: "jasmine",

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },
};

// Code to support common capabilities
exports.config.multiCapabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
