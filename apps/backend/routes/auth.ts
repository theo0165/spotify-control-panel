import { Router } from 'express';
import CallbackController from '../controllers/auth/CallbackController';
import LoginController from '../controllers/auth/LoginController';
import CallbackQrController from '../controllers/auth/qr/CallbackQrController';
import GetQrController from '../controllers/auth/qr/GetQrController';
import LoginQrController from '../controllers/auth/qr/LoginQrController';
import SetUserController from '../controllers/auth/qr/SetUserController';

const router = Router();

router.get('/login', LoginController);
router.get('/callback', CallbackController);

router.get('/qr/get', GetQrController);
router.get('/qr/login', LoginQrController);
router.get('/qr/callback', CallbackQrController);
router.post('/qr/set', SetUserController);

export default router;
