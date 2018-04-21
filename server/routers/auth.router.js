const express = require('express');
const getDb = require('../database/bootstrap.database');

const authRouter = express.Router();
//test worked
authRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    const db = getDb();
    db.READ.get_user( [id] )
        .then( user => res.status(200).send(user))
        .catch( err => res.status(500).send(err))
});
//test worked
authRouter.post('/register', (req, res) => {
    const db = getDb();
    const { username, first_name, last_name, email, password, company } = req.body;
    db.CREATE.create_user([ username, first_name, last_name, email, password, company ])
        .then( (user) => res.status(200).send(user))
        .catch( err => res.status(500).send(err))
});
//test worked
authRouter.put('/update/:id', (req, res) => {
    const db = getDb();
    const id = req.params.id;
    const { username, first_name, last_name, email, password, company } = req.body;
    db.UPDATE.update_user([id, username, first_name, last_name, email, password, company])
        .then( promise => res.status(200).send(promise))
        .catch( err => res.status(500).send(err) )
});
//test works ... updates status_id = 2
authRouter.put('/delete/:id', (req, res) => {
    const db = getDb();
    db.DELETE.delete_user(req.params.id)
        .then( () => res.status(200).send() )
        .catch( err => res.status(500).send(err) )
});

module.exports = authRouter;