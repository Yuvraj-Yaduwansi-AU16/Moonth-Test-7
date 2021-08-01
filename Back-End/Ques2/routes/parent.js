const express = require('express');
const {
  getParents,
  createParent,
  updateParent,
  deleteParent,
  getparent,
} = require('../controllers/parent');

const router = express.Router({ mergeParams: true });

router.route('/').get(getParents).post(createParent);
router.route('/:id').get(getparent).put(updateParent).delete(deleteParent);

module.exports = router;
