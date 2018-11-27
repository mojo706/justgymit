const { Members, Plans } = require('../models');

const addUser = async (req, res) => {
  const [newUser, created] = await Members.findOrCreate({
    where: req.body,
    defaults: req.body,
    plain: true
  });
  if (created) {
    res.status(201).json(newUser);
    return;
  }
  res.status(409).json({
    message: 'That user already exists'
  });
};

const updateUser = async (req, res) => {
  const user = await Members.findById(req.params.userId);
  await user.update(req.body);
  res.status(200).json(user);
};

const deleteUser = async (req, res) => {
  const user = await Members.findById(req.params.userId);
  await user.delete();
  res.status(200).json({
    message: 'That user has been deleted'
  });
};

module.exports = { addUser, updateUser, deleteUser };
