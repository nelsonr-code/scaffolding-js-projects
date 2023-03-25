import { Router } from 'express'
import { getRequest } from './controller.js'

const ComponentRouter = Router()

ComponentRouter.get('/', getRequest)

// export default ComponentRouter;
