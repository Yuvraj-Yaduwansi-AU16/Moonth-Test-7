const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Student = require('../models/Student');

exports.getStudents = asyncHandler(async (req, res, next) => {
  const posts = await Student.find();

  if (!posts) {
    return next(
      new ErrorResponse(`posts not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: posts });
});

exports.getStudent = asyncHandler(async (req, res, next) => {
  const post = await Student.findById(req.params.id);

  if (!post) {
    return next(
      new ErrorResponse(`post not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: post });
});

exports.createStudent = asyncHandler(async (req, res, next) => {
  const post = await Student.create(req.body);

  res.status(201).json({
    success: true,
    data: post,
  });
});

exports.updateStudent = asyncHandler(async (req, res, next) => {
  let post = await Student.findById(req.params.id);

  if (!post) {
    return next(
      new ErrorResponse(`Post not found with id of ${req.params.id}`, 404)
    );
  }

  post = await Student.findOneAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: post });
});

exports.deleteStudent = asyncHandler(async (req, res, next) => {
  const post = await Student.findById(req.params.id);

  if (!post) {
    return next(
      new ErrorResponse(`Post not found with id of ${req.params.id}`, 404)
    );
  }

  post.remove();

  res.status(200).json({ success: true, data: {} });
});
