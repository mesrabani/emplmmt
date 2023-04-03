const express = require('express');
const router = express.Router();

// Load Book model
const Employee = require('../../models/Employee');

// @route GET api/employees/test
// @description tests employees route
// @access Public
router.get('/test', (req, res) => res.send('employee route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  Employee.find()
    .then((employees) => res.json(employees))
    .catch((err) => res.status(404).json({ noemployeesfound: 'No employees found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
  Employee.findById(req.params.id)
    .then((employee) => res.json(employee))
    .catch((err) => res.status(404).json({ nobookfound: 'No Employee found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
  Employee.create(req.body)
    .then((employee) => res.json({ msg: 'Employee added successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to add this employee' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  Employee.findByIdAndUpdate(req.params.id, req.body)
    .then((book) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Employee.findByIdAndRemove(req.params.id, req.body)
    .then((employee) => res.json({ mgs: 'Employee entry deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such a book' }));
});

module.exports = router;