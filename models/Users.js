module.exports = function(sequelize, DataTypes){
  var User = sequelize.define("User", {
    google_id: {
      type: DataTypes.String,
      allowNull: false
    },
    name: {
      type: DataTypes.String,
      allowNull: false
    },
    email: {
      type: DataTypes.String,
      allowNull: false
    },
    photoURL: {
      type: DataTypes.String,
      allowNull: false
    },
    isTutor: {
      type: DataTypes.Boolean,
      allowNull: false
    },
    bio: {
      type: DataTypes.String,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.String,
      allowNull: true
    }
  });

  return User;
}
