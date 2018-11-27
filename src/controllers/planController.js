const { Member, Plan } = require('../models')

const addPlan = async (req, res) => {
  const [created, newPlan] = await Plan.findOrCreate({
    where: req.body,
    defaults: req.body,
    plain: true
  })
  if (created) {
    res.status(201).json(newPlan)
    return
  }
  res.status(409).json({
    message: 'That plan already exists'
  })
};

const updatePlan = async (req, res) => {
  const plan = await Plan.findById(req.params.planId)
  await plan.update(req.body)
  res.status(200).json(plan)
};

const deletePlan = async (req, res) => {
  const plan = await Plan.findById(req.params.planId);
  await plan.delete();
  res.status(200).json({
    message: 'That plan was deleted'
  });
};

const listMembers = async (req, res) => {
  const plan = await Plan.findById(req.params.planId);
  const members = plan.members
  res.status(200).json(members);
};

const listMembers = async (req, res) => {
  const member = await Member.findById(req.params.memberId);
  await member.update({ planId: null });
  res.status(200).json({
    message: 'Member successfully removed from plan'
  });
};

const addMember = async (req, res) => {
  const member = await Member.findById(req.params.memberId)
  await member.update({ planId: req.params.planId })
  res.status(200).json({
    message: 'Member successfully added'
  })
}

module.exports = { addPlan, updatePlan, deletePlan, listMembers, addMember }
