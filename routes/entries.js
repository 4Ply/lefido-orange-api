var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.locals.connection.query('SELECT id, event_id, gymnast_id FROM Competition_Entries', function (error, results) {
        if (error) throw error;

        res.send(results);
    });
});

module.exports = router;
