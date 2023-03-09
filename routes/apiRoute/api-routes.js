const router = require('express').Router();
const { newNote, removeNote } = require('../../lib/note');
let { noteArray } = require('../../db/db.json');

router.get('/note', (req, res) => {
    if(noteArray) {
        req.body.id = noteArray.length.toString();
    } else {req.body.id = 0}
    res.json(newNote(req.body, noteArray));
});

router.delete('/note/:id', async (req, res) => {
    const {id} = req.params
    noteArray = await removeNote(id, noteArray);
    res.json(noteArray);
});

module.exports = router;