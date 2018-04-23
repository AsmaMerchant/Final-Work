var configValues  = require('./config');

module.exports = { 

    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname +
    ':' + configValues.pwd +
    '@ds15667.mlab.com:57667/todotest';
   
   }

}
