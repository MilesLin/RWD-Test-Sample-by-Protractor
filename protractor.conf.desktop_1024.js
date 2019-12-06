let config = require('./protractor.conf.js').config;

config.params = { 
    width: 1024,
    height: 1280,
    imagePath: 'goldens/chrome',
    device: 'desktop_1024'
};

exports.config = config;
