import { Router } from 'express';
import CallbackController from '../../controllers/auth/CallbackController';
import LoginController from '../../controllers/auth/LoginController';

const router = Router();

router.use('/login', LoginController);
router.use('/callback', CallbackController);

export default router;
