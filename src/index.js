var $ = require('jquery');
var str = require('./constant');

var App = function() {
    // console.log();
    $('body').html(str);
};

var app = new App();
app.get = function() {};
