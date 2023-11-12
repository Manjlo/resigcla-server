const Joi = require('joi');

const schema = Joi.object({
  id: Joi.string().trim().required(),
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  phone: Joi.string().min(9).required(),
  URL_tumbnail: Joi.string().uri().required(),
});

const validate = (data) => {
  return schema.validate(data);
};

module.exports = validate;
