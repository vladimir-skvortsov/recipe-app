import { Router } from 'express'
import swagger from 'swagger-ui-express'

import swaggerDocument from '@server/assets/swagger.yaml'

import apiNotFoundController from '@server/controllers/apiNotFound/apiNotFound'
import pingController from '@server/controllers/ping/ping'
import rootController from '@server/controllers/root/root'


const router = Router()


router.use('/api', apiNotFoundController)
router.use('/api/ping', pingController)

router.use('/api-docs', swagger.serve, swagger.setup(swaggerDocument))
router.get('/*', rootController)


export default router
