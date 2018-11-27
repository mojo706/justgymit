const express = require('express')
const userController = require('../controllers/userController')
const { validateUser, validateUserId } = require('../middleware/userMiddleware')
const userRouter = express.Router();

const router = () => {
  userRouter.route('/').post(validateUser, userController.addUser);

  userRouter.use('/:userId', validateUserId);
  
  userRouter
    .route('/:userId')
    .put(userController.updateUser)
    .delete(userController.deleteUser);
  return userRouter;
};

module.exports = router;
