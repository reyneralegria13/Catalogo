import { Op } from 'sequelize'
import { Category, Product, ProductFeature } from '../models/index.js'

function buildProductWhere(filters) {
  const where = {
    active: filters.active ?? true,
  }

  if (filters.search) {
    where[Op.or] = [
      { name: { [Op.iLike]: `%${filters.search}%` } },
      { shortDescription: { [Op.iLike]: `%${filters.search}%` } },
    ]
  }

  if (filters.priceMax !== undefined) {
    where.priceCents = {
      [Op.lte]: Math.round(filters.priceMax * 100),
    }
  }

  return where
}

function getSortOrder(sort) {
  switch (sort) {
    case 'price-asc':
      return [
        ['priceCents', 'ASC'],
        ['rating', 'DESC'],
      ]
    case 'price-desc':
      return [
        ['priceCents', 'DESC'],
        ['rating', 'DESC'],
      ]
    case 'rating':
      return [
        ['rating', 'DESC'],
        ['reviewsCount', 'DESC'],
      ]
    case 'newest':
      return [['created_at', 'DESC']]
    default:
      return [
        ['rating', 'DESC'],
        ['reviewsCount', 'DESC'],
        ['created_at', 'DESC'],
      ]
  }
}

function mapProduct(product) {
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    short_description: product.shortDescription,
    long_description: product.longDescription,
    badge: product.badge,
    badge_type: product.badgeType,
    price_cents: product.priceCents,
    price_model: product.priceModel,
    rating: Number(product.rating),
    reviews_count: product.reviewsCount,
    active: product.active,
    created_at: product.created_at,
    category_slug: product.category?.slug,
    category_name: product.category?.name,
    features: (product.features ?? []).map((feature) => feature.featureText),
  }
}

export async function listProducts(filters) {
  const limit = filters.limit ?? 24
  const offset = filters.offset ?? 0

  const where = buildProductWhere(filters)
  const categoryWhere = filters.category ? { slug: filters.category } : undefined
  const order = getSortOrder(filters.sort)

  const result = await Product.findAndCountAll({
    where,
    include: [
      {
        model: Category,
        as: 'category',
        attributes: ['slug', 'name'],
        where: categoryWhere,
        required: Boolean(categoryWhere),
      },
      {
        model: ProductFeature,
        as: 'features',
        attributes: ['featureText', 'sortOrder'],
        required: false,
      },
    ],
    order: [
      ...order,
      [{ model: ProductFeature, as: 'features' }, 'sortOrder', 'ASC'],
    ],
    limit,
    offset,
    distinct: true,
  })

  const total = Array.isArray(result.count)
    ? result.count.length
    : Number(result.count ?? 0)

  return {
    items: result.rows.map((item) => mapProduct(item.toJSON())),
    total,
    limit,
    offset,
  }
}

export async function getProductById(productId) {
  const product = await Product.findByPk(productId, {
    include: [
      {
        model: Category,
        as: 'category',
        attributes: ['slug', 'name'],
      },
      {
        model: ProductFeature,
        as: 'features',
        attributes: ['featureText', 'sortOrder'],
        required: false,
      },
    ],
    order: [[{ model: ProductFeature, as: 'features' }, 'sortOrder', 'ASC']],
  })

  if (!product) {
    return null
  }

  return mapProduct(product.toJSON())
}
