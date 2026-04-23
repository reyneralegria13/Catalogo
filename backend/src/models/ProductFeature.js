import { DataTypes, Model } from 'sequelize'
import sequelize from '../db/sequelize.js'

class ProductFeature extends Model {}

ProductFeature.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_id',
    },
    featureText: {
      type: DataTypes.STRING(180),
      allowNull: false,
      field: 'feature_text',
    },
    sortOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      field: 'sort_order',
    },
  },
  {
    sequelize,
    modelName: 'ProductFeature',
    tableName: 'product_features',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false,
  },
)

export default ProductFeature
