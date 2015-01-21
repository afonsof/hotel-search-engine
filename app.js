var express = require('express')
    , bodyParser = require('body-parser')
    , errorHandler = require('errorhandler')
    , methodOverride = require('method-override')
    //, morgan = require('morgan')
    , http = require('http')
    , path = require('path')
    , db = require('./models');
    var hotels = require('./routes/hotels');
    var bookings = require('./routes/bookings');
    var search = require('./routes/search');
    var test = require('./routes/test');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
//app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
    app.use(errorHandler())
}


app.get('/api/hotels', hotels.findAll);
app.get('/api/hotels/:id', hotels.find);
app.post('/api/hotels', hotels.create);
app.put('/api/hotels/:id', hotels.update);
app.del('/api/hotels/:id', hotels.destroy);

app.get('/api/bookings', bookings.findAll);
app.get('/api/bookings/:id', bookings.find);
app.post('/api/bookings', bookings.create);
app.del('/api/bookings/:id', bookings.destroy);

app.get('/api/search', search.search);
app.get('/api/cities', search.findCities);

app.get('/api/testCreateHotel', test.testCreateHotel);
app.get('/api/testSearch', test.testSearch);


db
    .sequelize
    .sync()
    .complete(function (err) {
        if (err) {
            throw err
        } else {
            http.createServer(app).listen(app.get('port'), function () {
                console.log('Express server listening on port ' + app.get('port'))
            })
        }
    });
