const cuid = require('cuid')
module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Members', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: () => cuid()
    },
    planId: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    dateOfBirth: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Member.associate = models => {
    // associations can be defined here
    Member.belongsTo(models.Plans, {
      foreignKey: 'planId'
    })
  };
  return Member;
};
