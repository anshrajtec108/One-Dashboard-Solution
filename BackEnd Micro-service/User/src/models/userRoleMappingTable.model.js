// userRoleMapping.js - Maps users to roles
const UserRoleMapping = sequelize.define("UserRoleMapping", {
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: "users",
        key: "user_id",
      },
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user_roles",
        key: "role_id",
      },
    },
  }, {
    tableName: "user_role_mapping",
    timestamps: false,
  });
  
  module.exports = UserRoleMapping;