const express = require('express');
const planController = require('../controllers/planController');
const {
  validatePlan,
  validatePlanId,
  validateMemberId
} = require('../middleware/planMiddleware');

const planRouter = express.Router();

const router = () => {
  planRouter.route('/').post(validatePlan, planController.addPlan);

  planRouter.use('/:planId', validatePlanId);

  planRouter
    .route('/:planId')
    .put(validatePlan, planController.updatePlan)
    .delete(planController.deletePlan);
  
  planRouter.use('/:planId/members/:memberId', validateMemberId);

  planRouter
    .route('/:planId/members/:memberId')
    .post(planController.addMember)
    .delete(planController.deleteMember);
  planRouter.route('/:planId/members').get(planController.listMembers);
  return planRouter;
};

module.exports = router;
