import { DataTypes, Model } from 'sequelize'
import sequelize from '../db/sequelize.js'

class Inquiry extends Model {}

Inquiry.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING(120),
      allowNull: false,
      field: 'full_name',
    },
    email: {
      type: DataTypes.STRING(180),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    source: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'site',
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'product_id',
    },
  },
  {
    sequelize,
    modelName: 'Inquiry',
    tableName: 'inquiries',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false,
  },
)

export default Inquiry
