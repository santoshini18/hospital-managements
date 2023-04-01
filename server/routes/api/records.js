const express = require('express');
const router = express.Router();

// Load Book model
const Record = require('../../models/Record');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('record route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  Record.find()
    .then((records) => res.json(records))
    .catch((err) => res.status(404).json({ norecordsfound: 'No record found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
  Record.findById(req.params.id)
    .then((record) => res.json(record))
    .catch((err) => res.status(404).json({ norecordsfound: 'No record found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
  Record.create(req.body)
    .then((record) => res.json({ msg: 'record added successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to add this record' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  Record.findByIdAndUpdate(req.params.id, req.record)
    .then((record) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Record.findByIdAndRemove(req.params.id, req.body)
    .then((record) => res.json({ mgs: 'Record entry deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such a record' }));
});

module.exports = router;