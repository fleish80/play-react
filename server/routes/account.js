const express = require('express');
const Account = require('../models/account');
const router = express.Router();

/**
 * Add new accout
 */
router.post('/account', (req, res, next) => {
    const account = Account.create(req.body)
        .then(account => {
            res.send(account);
        }).catch(next);
});

router.get('/account', (req, res, next) => {
    res.send({data: 'data'});
});

module.exports = router;


