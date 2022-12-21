import { Controller } from '@scp/types';

const MeController: Controller = (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }

  return res.status(401).json({ error: 'No user' });
};

export default MeController;
