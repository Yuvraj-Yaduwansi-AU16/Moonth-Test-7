const express = require('express');
const {
  getStudent,
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} = require('../controllers/student');

const parentRouter = require('./parent');

const router = express.Router();

router.route('/').get(getStudents).post(createStudent);
router.route('/:id').get(getStudent).put(updateStudent).delete(deleteStudent);

// Re-route into other resource routers
router.use('/:studentId/parent', parentRouter);

module.exports = router;
