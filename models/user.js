const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Поле name обязательно для заполнения'],
    minlength: [2, 'Минимальная длина - 2 символов'],
    maxlength: [30, 'Максимальная длина - 30 символов'],
  },
  about: {
    type: String,
    required: [true, 'Поле about обязательно для заполнения'],
    minlength: [2, 'Минимальная длина - 2 символов'],
    maxlength: [30, 'Максимальная длина - 30 символов'],
  },
  avatar: {
    type: String,
    required: [true, 'Поле avatar обязательно для заполнения'],
  },
}, { versionKey: false });

module.exports = mongoose.model('user', userSchema);
