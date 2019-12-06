let config = require('./protractor.conf.js').config;

config.params = { 
    width: 768,
    height: 1024,
    imagePath: 'goldens/chrome',
    device: 'pad_768'
};

exports.config = config;
