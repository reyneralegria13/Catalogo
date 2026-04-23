import { fn, col } from 'sequelize'
import { Category, Product } from '../models/index.js'

export async function listCategories() {
  const categories = await Category.findAll({
    attributes: [
      'id',
      'slug',
      'name',
      'description',
      [fn('COUNT', col('products.id')), 'product_count'],
    ],
    include: [
      {
        model: Product,
        as: 'products',
        attributes: [],
        where: { active: true },
        required: false,
      },
    ],
    group: ['Category.id'],
    order: [['name', 'ASC']],
    subQuery: false,
  })

  return categories.map((category) => {
    const item = category.toJSON()
    return {
      id: item.id,
      slug: item.slug,
      name: item.name,
      description: item.description,
      product_count: Number(item.product_count ?? 0),
    }
  })
}
