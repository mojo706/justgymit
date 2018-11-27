const express = require('express')
const memberController = require('../controllers/memberController')

const memberRouter = express.Router()

const router = () => {
  memberRouter
    .route('/')
    .post(memberController.addUser)
    .put(memberController.updateUser)
    .delete(memberController.deleteUser);
  return memberRouter;
};

module.exports = router;
