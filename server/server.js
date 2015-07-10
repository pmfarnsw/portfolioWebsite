/**
 * Created by pmfarnsw on 5/7/15.
 */

/**
 * Module dependencies
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    errorHandler = require('express-error-handler'),
    morgan = require('morgan'),
    http = require('http'),
    path = require('path');


var app = module.exports = express();
//connect to mongo database and link schema


//require(__dirname+'/models/...js');

mongoose.connect('mongodb://localhost/workoutLog');
var db = mongoose.connection;




var routes = require('./routes');


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');


//set static files
app.use("/bower_components",express.static(path.join(__dirname,'../','app/','bower_components')));
app.use("/resources",express.static(path.join(__dirname,'../','app/','resources')));
app.use("/app",express.static(path.join(__dirname,'../','app/')));
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
    app.use(errorHandler());
}

// production only
if (env === 'production') {
    // TODO
}

//checks to see if connected to database
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open',function(callback){

    /**
     * Routes
     */




    // serve index and view partials

    app.get('/', routes.index);
    app.get('/partials/:name', routes.partials);





    // redirect all others to the index (HTML5 history)
    app.get('*', routes.index);


    /**
     * Start Server
     */

    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });

});