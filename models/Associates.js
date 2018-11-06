module.exports = function(sequelize, DataTypes) {
  var Associate = sequelize.define("Associate", {
    google_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    associate_google_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn("now")
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn("now")
    }
  });

  return Associate;
};
