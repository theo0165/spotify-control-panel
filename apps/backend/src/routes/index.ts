import { Controller } from '@scp/types';
import { Router } from 'express';

const router = Router();

const test: Controller<{ hello: 'world' }> = (req, res) => {
  res.cookie('hello', 123);
  return res.json({ hello: 'world' });
};

router.get('/', test);

export default router;
