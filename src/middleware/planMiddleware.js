const { Members, Plans } = require('../models');

const Joi = require('joi');
const schema = {
  name: Joi.string().required(),
  type: Joi.string().valid('recurrent', 'time limited'),
  startDate: Joi.date(),
  endDate: Joi.date()
};

const validatePlan = (req, res, next) => {
  Joi.validate(req.body, schema, error => {
    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }
    if (req.body.type === 'time limited') {
      Joi.validate(
        req.body,
        {
          ...schema,
          startDate: schema.startDate.required(),
          endDate: schema.endDate.required()
        },
        err => {
          if (err) {
            res.status(400).json({ message: err.details[0].message });
            return;
          }
          next();
        }
      );
    } else {
      next();
    }
  });
};

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
