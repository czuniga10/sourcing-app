const express = require('express');
const getDb = require('../database/bootstrap.database');

const cardRouter = express.Router();
//test works
cardRouter.get('/:projectId', (req, res) => {
    const projectId = req.params.projectId;
    const db = getDb();
    db.READ.get_project_cards( [projectId] )
        .then( cards => res.status(200).send(cards))
        .catch( err => res.status(500).send(err))
});
//test works
cardRouter.get('/:projectId/:cardId', (req, res) => {
    const projectId = req.params.projectId;
    const cardId = req.params.cardId
    const db = getDb();
    db.READ.get_project_card( [projectId, cardId] )
        .then( card => res.status(200).send(card))
        .catch( err => res.status(500).send(err))
});
//test works
cardRouter.post('/create', (req, res) => {
    const db = getDb();
    const { summary, experience, skills, education, avatar, project_id, swiped_right, swiped_left } = req.body;
    db.CREATE.create_card([ summary, experience, skills, education, avatar, project_id, swiped_right, swiped_left ])
        .then( (promise) => res.status(200).send(promise) )
        .catch( err => res.status(500).send(err) )
});
//test works
cardRouter.put('/update/:id', (req, res) => {
    const db = getDb();
    const id = req.params.id;
    const { summary, experience, skills, education, avatar, project_id, swiped_right, swiped_left } = req.body;
    db.UPDATE.update_card([ id, summary, experience, skills, education, avatar, project_id, swiped_right, swiped_left ])
        .then( promise => res.status(200).send(promise))
        .catch( err => res.status(500).send(err) )
});
//NOT WORKING YET
// Not sure want to use; dont want to ever delete cards
cardRouter.put('/delete/:id', (req, res) => {
    const db = getDb();
    db.DELETE.delete_card(req.params.id)
        .then( () => res.status(200).send() )
        .catch( err => res.status(500).send(err) )
});

module.exports = cardRouter;