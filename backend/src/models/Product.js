import { DataTypes, Model } from 'sequelize'
import sequelize from '../db/sequelize.js'

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    slug: {
      type: DataTypes.STRING(80),
      allowNull: false,
      unique: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category_id',
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    shortDescription: {
      type: DataTypes.STRING(280),
      allowNull: false,
      field: 'short_description',
    },
    longDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'long_description',
    },
    badge: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    badgeType: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'primary',
      field: 'badge_type',
    },
    priceCents: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'price_cents',
    },
    priceModel: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'price_model',
      defaultValue: 'mes',
    },
    rating: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: false,
      defaultValue: 0.0,
    },
    reviewsCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'reviews_count',
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
)

export default Product
