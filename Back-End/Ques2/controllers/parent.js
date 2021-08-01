const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Parent = require('../models/Parent');

exports.getParents = asyncHandler(async (req, res, next) => {
  const parents = await Parent.find();

  if (!parents) {
    return next(
      new ErrorResponse(`parents not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: parents });
});

exports.getparent = asyncHandler(async (req, res, next) => {
  const parent = await Parent.findById(req.params.id);

  if (!parent) {
    return next(
      new ErrorResponse(`Parent not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: parent });
});

exports.createParent = asyncHandler(async (req, res, next) => {
  const parent = await Parent.create(req.body);

  res.status(201).json({
    success: true,
    data: parent,
  });
});

exports.updateParent = asyncHandler(async (req, res, next) => {
  let parent = await Parent.findById(req.params.id);

  if (!parent) {
    return next(
      new ErrorResponse(`Parent not found with id of ${req.params.id}`, 404)
    );
  }

  Parent = await Parents.findOneAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: parent });
});

exports.deleteParent = asyncHandler(async (req, res, next) => {
  const parent = await Parent.findById(req.params.id);

  if (!parent) {
    return next(
      new ErrorResponse(`Parent not found with id of ${req.params.id}`, 404)
    );
  }

  parent.remove();

  res.status(200).json({ success: true, data: {} });
});
