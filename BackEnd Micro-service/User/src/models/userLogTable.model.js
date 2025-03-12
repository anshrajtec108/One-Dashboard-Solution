// userLogs.js - Stores user actions for auditing
const UserLogs = sequelize.define("UserLogs", {
    log_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: "users",
        key: "user_id",
      },
    },
    action_performed: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    ip_address: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    device_info: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  }, {
    tableName: "user_logs",
    timestamps: false,
  });
  
  module.exports = UserLogs;