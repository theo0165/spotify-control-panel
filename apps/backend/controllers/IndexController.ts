import { Controller } from '@scp/types';

const IndexController: Controller = (req, res) => res.json({ hello: req.session.token });

export default IndexController;
