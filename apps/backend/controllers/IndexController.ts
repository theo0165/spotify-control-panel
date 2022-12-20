import { Controller } from '@scp/types';
import { helloWorld } from '@scp/utils';

interface IResponse {
  hello: string;
}

const IndexController: Controller<IResponse> = (req, res) => res.json({ hello: helloWorld() });

export default IndexController;
