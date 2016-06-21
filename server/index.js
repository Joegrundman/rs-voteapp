var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

// import App from './generated/app'
var App = require ('./generated/app').default;

var server = express();

var port = process.env.PORT || 3000;

server.get('/', function (req, res){
    res.send(ReactDOMServer.renderToString(React.createElement(App)));
    // res.send(ReactDOMServer.renderToString(<App />));
});

server.listen(port, function () {
    console.log('serving on port:', port);
});