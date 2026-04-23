import { z } from 'zod'

const optionalText = (maxLength) =>
  z.preprocess((value) => {
    if (value === undefined || value === null || value === '') {
      return undefined
    }

    return String(value).trim()
  }, z.string().max(maxLength).optional())

export const inquiryDto = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  phone: optionalText(30),
  message: z.string().trim().min(10).max(2000),
  source: optionalText(50),
  productId: z.preprocess((value) => {
    if (value === undefined || value === null || value === '') {
      return undefined
    }

    const parsed = Number(value)
    return Number.isInteger(parsed) ? parsed : value
  }, z.number().int().positive().optional()),
})
