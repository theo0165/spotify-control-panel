import { Router } from 'express';
import PlayController from '../controllers/music/PlayController';

const router = Router();

router.post('/play', PlayController);

export default router;
