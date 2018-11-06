module.exports = function(sequelize, DataTypes) {
  var Note = sequelize.define("Note", {
    google_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
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

  return Note;
};
