import { Router } from 'express'
import { validateDto } from '../middlewares/validateDto.js'
import { productQueryDto } from '../dtos/productQuery.dto.js'
import { getProduct, getProducts } from '../controllers/productController.js'

const router = Router()

router.get('/', validateDto(productQueryDto, 'query'), getProducts)
router.get('/:id', getProduct)

export default router
