import { Router } from 'express'
import { validateDto } from '../middlewares/validateDto.js'
import { inquiryDto } from '../dtos/inquiry.dto.js'
import { postInquiry } from '../controllers/inquiryController.js'

const router = Router()

router.post('/', validateDto(inquiryDto, 'body'), postInquiry)

export default router
