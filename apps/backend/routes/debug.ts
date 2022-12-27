import { Request, Response, Router } from 'express';
import Socket from '../lib/socket';

const router = Router();

router.get('/movement', (req: Request, res: Response) => {
  // eslint-disable-next-line operator-linebreak
  const { action } = req.body;

  const socket = Socket.getInstance();

  socket.emit(action);

  res.send('OK');
});

export default router;
