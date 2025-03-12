// userSessions.js - Tracks user login sessions
const UserSessions = sequelize.define("UserSessions", {
    session_id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: "users",
        key: "user_id",
      },
    },
    ip_address: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    device_info: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    login_time: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    logout_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    tableName: "user_sessions",
    timestamps: false,
  });
  
  module.exports = UserSessions;