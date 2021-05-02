var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function (req, res, next) {
    knex('html')
        .then(rows => res.status(200).send(rows))
        .catch(err => res.status(500).send({ error: err }));
});

router.post('/', function (req, res, next) {
    knex('html')
        .insert(req.body)
        .then(rows => res.status(200).send(rows))
        .catch(err => res.status(500).send({ error: err }));
});

router.delete('/:id', function (req, res, next) {
    knex('html')
        .where('id', req.params.id)
        .del()
        .then(rows => res.sendStatus(200))
        .catch(err => res.status(500).send({ error: err }));
});

module.exports = router;
