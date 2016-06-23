var express = require('express');
var router = express.Router();


router.post('/', function(req, res) {
    console.log('Got something', req.body);
    res.json({msg: 'received something'})
});

module.exports = router;