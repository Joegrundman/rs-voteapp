var path = require('path')
var express = require('express');
var handlebars = require ('express-handlebars')
var React = require('react');
var ReactDOMServer = require('react-dom/server');

// import App from './generated/app'
var App = require ('./generated/app').default;

var port = process.env.PORT || 3000;

var server = express();

// view templates engine
server.engine('handlebars', handlebars({ defaultLayout: 'main' }));
server.set('view engine', 'handlebars');

// static assets
server.use(express.static(path.resolve(__dirname, '../dist')));

// Routes
server.get('/', function (req, res){
    res.render('app', {
        app: ReactDOMServer.renderToString(React.createElement(App))
    });
    // res.send(ReactDOMServer.renderToString(React.createElement(App)));
    // res.send(ReactDOMServer.renderToString(<App />));
});

server.listen(port, function () {
    console.log('serving on port:', port);
});