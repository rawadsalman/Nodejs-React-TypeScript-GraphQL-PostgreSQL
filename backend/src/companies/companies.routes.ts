import { Router } from 'express'
import { createValidator } from 'express-joi-validation'
import {addCompanyHandler, getCompanyHandler, getCompaniesHandler,deleteCompanyHandler} from './companies.handler'

const validator = createValidator()
const router = Router()

router
  .route('/')
  .get(getCompaniesHandler)
  .post(addCompanyHandler)


router 
  .route('/:uuid')
  .get(getCompanyHandler)
  .delete(deleteCompanyHandler)

export default router
