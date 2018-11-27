const express = require('express');
const planController = require('../controllers/planController');

const planRouter = express.Router();

const router = () => {
  planRouter
    .route('/')
    .post(planController.addPlan)
    .put(planController.updatePlan)
    .delete(planController.deletePlan);
  planRouter
    .route('/members')
    .get(planController.listMembers)
    .post(planController.addMember)
    .delete(planController.deleteMember);
  
  return planRouter;
};

module.exports = router;
