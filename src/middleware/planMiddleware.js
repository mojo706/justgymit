const { Members, Plans } = require('../models');

const Joi = require('joi');
const schema = {
  name: Joi.string().required(),
  type: Joi.string().valid('recurrent', 'time limited'),
  startDate: Joi.date(),
  endDate: Joi.date()
};

const validatePlan = (req, res, next) => {
  const valid = Joi.validate(schema)
  if (!valid) {
    res.status(400).json({
      message: 'Invalid plan'
    })
  }
  next()
}

const validatePlanId = async (req, res, next) => {
  if (!req.params.planId) {
    res.status(400).json({
      message: 'planId is missing!'
    });
    return;
  }
  const plan = await Plans.findById(req.params.planId);
  if (!plan) {
    res.status(404).json({ message: 'A plan with that planId does not exist' });
    return;
  }
  next();
};
const validateMemberId = async (req, res, next) => {
  if (!req.params.memberId) {
    res.status(400).json({
      message: 'memberId is missing!'
    });
    return;
  }
  const member = await Members.findById(req.params.memberId);
  if (!member) {
    res
      .status(404)
      .json({ message: 'A User with that memberId does not exist' });
    return;
  }
  next();
};

module.exports = { validatePlan, validatePlanId, validateMemberId };
