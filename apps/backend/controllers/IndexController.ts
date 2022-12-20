import { Controller } from '@scp/types';

interface IResponse {
  hello: 'world';
}

const IndexController: Controller<IResponse> = (req, res) => res.json({ hello: 'world' });

export default IndexController;
