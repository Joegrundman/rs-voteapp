var express = require('express');
var router = express.Router();

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var App = require ('../../generated/app').default;


router.get('/', function (req, res){
    res.render('app', {
        app: ReactDOMServer.renderToString(React.createElement(App))
    });
    // res.send(ReactDOMServer.renderToString(React.createElement(App)));
    // res.send(ReactDOMServer.renderToString(<App />));
});

module.exports = router;