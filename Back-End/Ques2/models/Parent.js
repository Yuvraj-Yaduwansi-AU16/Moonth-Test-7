const mongoose = require('mongoose');

const ParentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  student: {
    type: mongoose.Schema.ObjectId,
    ref: 'Student',
  },
});

// Static method to get Student
ParentSchema.statics.getStudent = async function (studentId) {
  const obj = await this.aggregate([
    {
      $match: { student: studentId },
    },
    {
      $group: {
        _id: '$student',
        parents: {
          $push: {
            _id: '$_id',
            name: '$name',
            phoneNumber: '$phoneNumber',
            email: '$email',
            occupation: '$occupation',
            designation: '$designation',
          },
        },
      },
    },
  ]);

  try {
    await this.model('Student').findByIdAndUpdate(studentId, {
      parents: obj[0].parents,
    });
  } catch (err) {
    console.error(err);
  }
};

// Call getStudent after save
ParentSchema.post('save', function () {
  this.constructor.getStudent(this.student);
});

// Call getStudent before remove
ParentSchema.pre('remove', function () {
  this.constructor.getStudent(this.student);
});
module.exports = mongoose.model('Parent', ParentSchema);
