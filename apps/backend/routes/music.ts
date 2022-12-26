import { Router } from 'express';
import PauseController from '../controllers/music/PauseController';
import PlayController from '../controllers/music/PlayController';
import PlayStateController from '../controllers/music/PlayStateController';

const router = Router();

router.post('/play', PlayController);
router.post('/pause', PauseController);
router.get('/state', PlayStateController);

export default router;
