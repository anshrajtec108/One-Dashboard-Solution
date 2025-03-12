
const UserSecurity = sequelize.define("UserSecurity", {
    user_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      references: {
        model: "users",
        key: "user_id",
      },
    },
    failed_login_attempts: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    last_failed_attempt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    account_locked_until: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    two_factor_enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    two_factor_secret: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password_last_changed_at: {
      type: DataTypes.JSON, // Stores password change history
      allowNull: true,
    },
  }, {
    tableName: "user_security",
    timestamps: false,
  });
  
  module.exports = UserSecurity;