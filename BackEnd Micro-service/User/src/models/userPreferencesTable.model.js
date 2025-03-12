const UserPreferences = sequelize.define("UserPreferences", {
    user_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      references: {
        model: "users",
        key: "user_id",
      },
    },
    currency_preference: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    language_preference: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    theme_preference: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    notification_settings: {
      type: DataTypes.JSON, // Stores notification preferences
      allowNull: true,
    },
  }, {
    tableName: "user_preferences",
    timestamps: false,
  });
  
  module.exports = UserPreferences;