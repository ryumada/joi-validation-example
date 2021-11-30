// import Joi
const Joi = require('joi');

// tulis kode di bawah ini

// membuat objek schema
const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().min(6).required(),
  repeatPassword: Joi.string().required().valid(Joi.ref("password")),
  email: Joi.string().email().required(),
});

// memvalidasi objek berdasarkan schema
const validationResult = schema.validate({
  username: 'ryumada',
  password: 'tokecang-tokecang-balagendir-tosblong',
  repeatPassword: 'tokecang-tokecang-balagendir-tosblong',
  email: 'contact@ryumada.com',
});

// memanggil pesan error validasi
if(!validationResult.error) {
  console.log(validationResult);
} else {
  console.log(validationResult.error.message);
}
