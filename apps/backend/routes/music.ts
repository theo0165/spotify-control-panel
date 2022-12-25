import { Router } from 'express';
import PlayController from '../controllers/music/PlayController';
import PlayStateController from '../controllers/music/PlayStateController';

const router = Router();

router.post('/play', PlayController);
router.get('/state', PlayStateController);

export default router;
