// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
process.env['UPDATE_GOLDENS'] = "1";

exports.config = {
  params: { 
    width: 1440,
    height: 568,
    imagePath: 'goldens/chrome',
    device: 'desktop_1440'
  },
  allScriptsTimeout: 999000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    'browserName': 'chrome',
    shardTestFiles: true,
    maxInstances: 2,
  },
  directConnect: true,
  baseUrl: 'https://www.protractortest.org/#/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 999000,
    print: function() {}
  },
  async onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

    await browser.manage().window().setSize(browser.params.width, browser.params.height);
  }
};