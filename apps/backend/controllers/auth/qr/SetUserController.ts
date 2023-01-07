import { Controller } from '@scp/types';

const SetUserController: Controller = async (req, res) => {
  if (!req.body || !req.body.user || !req.body.token) {
    return res.status(400).json({ error: 'No user or token' });
  }

  req.session.user = req.body.user;
  req.session.token = req.body.token;
  req.session.save();

  return res.json({ success: true });
};

export default SetUserController;
