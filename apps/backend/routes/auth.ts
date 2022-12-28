import { Router } from 'express';
import CallbackController from '../controllers/auth/CallbackController';
import LoginController from '../controllers/auth/LoginController';
import GetQrController from '../controllers/auth/qr/GetQrController';

const router = Router();

router.get('/login', LoginController);
router.get('/callback', CallbackController);

router.get('/qr/get', GetQrController);

export default router;
