import { Router } from 'express'
import httpStatus from 'http-status'
import config from './config/env'
import companiesRoutes from './companies/companies.routes'

const router = Router()

router.get('/health', (req, res) => res.status(httpStatus.OK).send())

router.get('/version', (req, res) => {
  res.json({
    version: config.version,
  })
})

router.use('/companies', companiesRoutes)

export default router
