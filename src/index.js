const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const planRouter = require('./routes/planRouter')();
const userRouter = require('./routes/userRouter')();

module.exports = app => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/api/plans', planRouter); // setup plans routes
  app.use('/api/users', userRouter); // setup user routes
  app.use(errors());
};
