import { Inquiry } from '../models/index.js'

export async function createInquiry(payload) {
  const inquiry = await Inquiry.create({
    fullName: payload.fullName,
    email: payload.email,
    phone: payload.phone ?? null,
    message: payload.message,
    source: payload.source ?? 'site',
    productId: payload.productId ?? null,
  })

  return inquiry.toJSON()
}
