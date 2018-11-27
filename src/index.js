const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const planRouter = require('./routes/planRouter')();
const memberRouter = require('./routes/memberRouter')();

module.exports = app => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/api/plans', planRouter); // setup plans routes
  app.use('/api/members', memberRouter); // setup member routes
  app.use(errors());
};
