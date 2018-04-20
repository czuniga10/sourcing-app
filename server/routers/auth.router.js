const express = require('express');
const getDb = require('../database/bootstrap.database');

const authRouter = express.Router();

authRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    const db = getDb();
    db.READ.get_user( [id] )
        .then( user => res.status(200).send(user))
        .catch( err => res.status(500).send(err))
});

authRouter.post('/register', (req, res) => {
    const db = getDb();
    const { first_name, last_name, company, address, city, state, zip_code, phone, email } = req.body;
    db.create_user([first_name, last_name, company, address, city, state, zip_code, phone, email])
        .then( () => res.status(200).send())
        .catch( err => res.send(err))
});

authRouter.put('/update/:id', (req, res) => {
    const db = getDb();
    const id = req.params.id;
    const { first_name, last_name, company, address, city, state, zip_code, phone, email } = req.body;
    db.update_user([id, first_name, last_name, company, address, city, state, zip_code, phone, email])
        .then( promise => res.status(200).send(promise))
        .catch( err => res.send(err) )
});

authRouter.delete('/delete/:id', (req, res) => {
    const db = getDb();
    db.delete_user(req.params.id)
        .then( () => res.status(200).send() )
        .catch( err => res.send(err) )
});

module.exports = authRouter;