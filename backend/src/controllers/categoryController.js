import { asyncHandler } from '../utils/asyncHandler.js'
import { listCategories } from '../services/categoryService.js'

export const getCategories = asyncHandler(async (_req, res) => {
  const data = await listCategories()

  res.status(200).json({
    message: 'Categories fetched successfully',
    data,
  })
})
