var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.body);
    res.send({"length":"5",
        "data": [
            {"x" : 200, "y" : 300, "money" : 10000},
            {"x" : 400, "y" : 300, "money" : 10000},
            {"x" : 200, "y" : 400, "money" : 10000},
            {"x" : 400, "y" : 400, "money" : 10000},
            {"x" : 400, "y" : 500, "money" : 10000},
        ]})
});


module.exports = router;
