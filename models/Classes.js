module.exports = function(sequelize, DataTypes){
  var Class = sequelize.define("Class", {
    google_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    associate_id:{
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photoURL: {
      type: DataTypes.STRING,
      allowNull: false
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE, 
      allowNull: false
    },
    createdAt: {
     type: DataTypes.DATE,
     defaultValue: sequelize.fn('now')
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('now')
    }
  });

  return Class;
}
