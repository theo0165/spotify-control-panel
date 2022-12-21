import { Router } from 'express';
import MeController from '../controllers/user/MeController';
import PlaylistController from '../controllers/user/PlaylistsController';

const router = Router();

router.get('/me', MeController);
router.get('/playlists', PlaylistController);

export default router;
