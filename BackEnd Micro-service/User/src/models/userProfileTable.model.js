const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./users"); // Import User Model

const UserProfile = sequelize.define("UserProfile", {
  user_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    references: {
      model: "users",
      key: "user_id",
    },
  },
  dob: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  gender: {
    type: DataTypes.ENUM("Male", "Female", "Other"),
    allowNull: true,
  },
  address_line1: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  address_line2: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  country: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  zip_code: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  profile_picture_url: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  kyc_verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  kyc_document_url: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  last_login: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: "user_profiles",
  timestamps: false,
});

User.hasOne(UserProfile, { foreignKey: "user_id" });
UserProfile.belongsTo(User, { foreignKey: "user_id" });

module.exports = UserProfile;
 