const { celebrate, Joi} = require('celebrate')
const schema = {
  name: Joi.string().required(),
  type: Joi.string().valid('recurrent', 'time limited'),
  startDate: Joi.date(),
  endDate: Joi.date(),
  numberOfPages: Joi.number().min(1).required(),
};

const validatePlan = celebrate({
  body: Joi.object.keys(schema).when(Joi.object({
    type: Joi.string.valid('time limited')
  }),{
    then: Joi.object.keys({
      ...schema,
      startDate: schema.startDate.required(),
      endDate: schema.endDate.required()
    })
  })
})

