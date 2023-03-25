import { Router } from 'express';
import ComponentRouter from '../components/component/routes.js';

const Routes = Router();

Routes.use('/', ComponentRouter);

export default Routes;
