import { asyncHandler } from '../utils/asyncHandler.js'
import { createInquiry } from '../services/inquiryService.js'

export const postInquiry = asyncHandler(async (req, res) => {
  const inquiry = await createInquiry(req.body)

  res.status(201).json({
    message: 'Inquiry created successfully',
    data: inquiry,
  })
})
