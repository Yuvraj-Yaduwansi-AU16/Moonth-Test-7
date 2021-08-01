const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Student = require('../models/Student');

exports.getSummary = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id).select(
    '-address, -photoURL'
  );

  if (!student) {
    return next(
      new ErrorResponse(`Student not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    student,
  });
});
