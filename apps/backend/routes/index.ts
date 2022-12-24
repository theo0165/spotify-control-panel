import { Router } from 'express';
import IndexController from '../controllers/IndexController';
import ResolveApplicationController from '../controllers/ResolveApplicationController';
import AuthRoutes from './auth';
import MusicRoutes from './music';
import UserRoutes from './user';

const router = Router();

router.use('/auth', AuthRoutes);
router.use('/user', UserRoutes);
router.use('/music', MusicRoutes);

router.get('/', IndexController);
router.get('/resolve', ResolveApplicationController);

export default router;
