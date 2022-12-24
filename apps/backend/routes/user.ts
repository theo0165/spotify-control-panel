import { Router } from 'express';
import DevicesController from '../controllers/user/DevicesController';
import MeController from '../controllers/user/MeController';
import PlaylistController from '../controllers/user/PlaylistsController';
import SetActiveDeviceController from '../controllers/user/SetActiveDeviceController';

const router = Router();

router.get('/me', MeController);
router.get('/playlists', PlaylistController);
router.get('/devices', DevicesController);
router.post('/devices/set', SetActiveDeviceController);

export default router;
