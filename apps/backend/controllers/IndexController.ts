import { Controller } from '@scp/types';

const IndexController: Controller = (req, res) => res.json({ hello: 'world' });

export default IndexController;
