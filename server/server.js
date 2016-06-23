var path = require('path')
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan')
var handlebars = require ('express-handlebars');

var passport = require('passport');

var port = process.env.PORT || 3000;

require('./database');

var server = express();



// view templates engine
server.engine('handlebars', handlebars({ 
    defaultLayout: 'main',
    layoutsDir: path.resolve(__dirname, 'views/layouts') 
}));
server.set('view engine', 'handlebars');
server.set('views', path.resolve(__dirname, 'views'))
// static assets
server.use(logger('dev'))
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.static(path.resolve(__dirname, '../dist')));



server.use(passport.initialize());
var router = require('./router')(server, passport);
// // Routes
// server.get('/', function (req, res){
//     res.render('app', {
//         app: ReactDOMServer.renderToString(React.createElement(App))
//     });
//     // res.send(ReactDOMServer.renderToString(React.createElement(App)));
//     // res.send(ReactDOMServer.renderToString(<App />));
// });

// server.post('/signup', function(req, res) {
//     console.log('Got something', req.body)

// })

server.listen(port, function () {
    console.log('serving on port:', port);
});

module.exports = server;