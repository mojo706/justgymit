module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plans', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: () => cuid()
    },
    memberId: {
      allowNull: false,
      type: DataTypes.STRING
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING
    },
    startDate: {
      allowNull: true,
      type: DataTypes.STRING
    },
    endDate: {
      allowNull: true,
      type: DataTypes.STRING
    }
  }, {});
  Plan.associate = models => {
    Plan.hasMany(models.Member, {
      foreignKey: 'id',
      as: 'members',
      onDelete: 'CASCADE'
    });
  };
  return Plan;
};