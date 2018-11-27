const { Members, Plans } = require('../models')
const Joi = require('joi');

const schema = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  dateOfBirth: Joi.date().required(),
};

const validateUser = (req, res, next) => {
  const valid = Joi.validate(schema);
  if (!valid) {
    res.status(400).json({
      message: 'Invalid user'
    });
  }
  next()
};


const validateUserId = async (req, res, next) => {
  if (!req.params.userId) {
    res.status(400).json({
      message: 'userId is missing!'
    })
    return;
  }
  const member = await Members.findById(req.params.userId)
  if (!member) {
    res.status(404).json({ message: 'A User with that userId does not exist' });
    return;
  }
  next();
};

module.exports = { validateUser, validateUserId };

