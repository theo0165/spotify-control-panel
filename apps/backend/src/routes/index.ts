import { Router } from 'express';
import IndexController from '../../controllers/IndexController';
import AuthRoutes from './auth';

const router = Router();

router.use('/auth', AuthRoutes);

router.get('/', IndexController);

export default router;
