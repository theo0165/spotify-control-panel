import { Router } from 'express';
import NextController from '../controllers/music/NextController';
import PauseController from '../controllers/music/PauseController';
import PlayController from '../controllers/music/PlayController';
import PlayStateController from '../controllers/music/PlayStateController';
import PreviousController from '../controllers/music/PreviousController';
import StartController from '../controllers/music/StartController';
import ToggleRepeatController from '../controllers/music/ToggleRepeatController';
import ToggleShuffleController from '../controllers/music/ToggleShuffleController';

const router = Router();

router.post('/start', StartController);
router.post('/play', PlayController);
router.post('/pause', PauseController);
router.get('/state', PlayStateController);
router.post('/next', NextController);
router.post('/previous', PreviousController);
router.post('/shuffle', ToggleShuffleController);
router.post('/repeat', ToggleRepeatController);

export default router;
