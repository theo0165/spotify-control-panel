import { Router } from 'express';
import MeController from '../controllers/user/MeController';

const router = Router();

router.use('/me', MeController);

export default router;
