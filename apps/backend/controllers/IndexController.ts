import { Controller } from '@scp/types';
import { helloWorld } from '@scp/utils';

interface IResponse {
  hello: any;
}

const IndexController: Controller<IResponse> = (req, res) => res.json({ hello: helloWorld() });

export default IndexController;
