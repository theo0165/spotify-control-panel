import { Router } from 'express';
import NextController from '../controllers/music/NextController';
import PauseController from '../controllers/music/PauseController';
import PlayController from '../controllers/music/PlayController';
import PlayStateController from '../controllers/music/PlayStateController';
import PreviousController from '../controllers/music/PreviousController';
import StartController from '../controllers/music/StartController';

const router = Router();

router.post('/start', StartController);
router.post('/play', PlayController);
router.post('/pause', PauseController);
router.get('/state', PlayStateController);
router.post('/next', NextController);
router.post('/previous', PreviousController);

export default router;
