var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.locals.connection.query('SELECT id, competition_id, level FROM Competition_Events', function (error, results) {
        if (error) throw error;

        res.send(results);
    });
});

module.exports = router;
