const Joi = require('joi');

const schema = Joi.object({
  id: Joi.string().trim().required(),
  name: Joi.string().min(3).required(),
  register_type: Joi.number().required(),
  urlThumbnail: Joi.string().allow('').optional(), // alowed empty
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  phone: Joi.string().min(9).required(),
});

const validate = (data) => {
  return schema.validate(data);
};

module.exports = validate;
