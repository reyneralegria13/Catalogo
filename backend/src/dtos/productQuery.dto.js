import { z } from 'zod'

function optionalNumber(min, max) {
  return z.preprocess((value) => {
    if (value === undefined || value === null || value === '') {
      return undefined
    }

    const parsed = Number(value)
    return Number.isFinite(parsed) ? parsed : value
  }, z.number().min(min).max(max).optional())
}

const optionalBoolean = z.preprocess((value) => {
  if (value === undefined || value === null || value === '') {
    return undefined
  }

  if (value === true || value === false) {
    return value
  }

  if (value === 'true') {
    return true
  }

  if (value === 'false') {
    return false
  }

  return value
}, z.boolean().optional())

export const productQueryDto = z.object({
  category: z.string().trim().min(1).max(60).optional(),
  search: z.string().trim().max(120).optional(),
  sort: z.enum(['relevance', 'price-asc', 'price-desc', 'rating', 'newest']).optional(),
  priceMax: optionalNumber(0, 1_000_000),
  active: optionalBoolean,
  limit: optionalNumber(1, 100),
  offset: optionalNumber(0, 10_000),
})
