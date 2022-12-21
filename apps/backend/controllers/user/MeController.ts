import { Controller } from '@scp/types';

const MeController: Controller = (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }

  console.log(req.session);

  return res.json({ what: 'happend' });
};

export default MeController;
