const { Members, Plans } = require('../models');

const addPlan = async (req, res) => {
  const [newPlan, created] = await Plans.findOrCreate({
    where: req.body,
    defaults: req.body,
    plain: true
  });
  if (created) {
    res.status(201).json(newPlan);
    return;
  }
  res.status(409).json({
    message: 'That plan already exists'
  });
};

const updatePlan = async (req, res) => {
  const plan = await Plans.findById(req.params.planId);
  await plan.update(req.body);
  res.status(200).json(plan);
};

const deletePlan = async (req, res) => {
  const plan = await Plans.findById(req.params.planId);
  await plan.destroy();
  res.status(200).json({
    message: 'That plan was deleted'
  });
};

const listMembers = async (req, res) => {
  const plan = await Plans.findById(req.params.planId, {
    include: [
      {
        model: Members,
        as: 'members'
      }
    ]
  });
  console.log(plan);
  const members = plan.members;
  res.status(200).json(members);
};

const removeMember = async (req, res) => {
  const member = await Members.findById(req.params.memberId);

  console.log(member);

  if (member.planId === req.params.planId) {
    await member.update({ planId: null });
    res.status(200).json({
      message: 'Member successfully removed from plan'
    });
  } else {
    res.status(404).json({
      message: 'Member does not exist in plan'
    });
  }
};

const addMember = async (req, res) => {
  const member = await Members.findById(req.params.memberId);
  if (member.planId === req.params.planId) {
    res.status(409).json({ message: 'Member already exists in plan' });
  } else {
    await member.update({ planId: req.params.planId });
    res.status(200).json({ message: 'Member successfully added' });
  }
};

module.exports = {
  addPlan,
  updatePlan,
  deletePlan,
  listMembers,
  addMember,
  removeMember
};
