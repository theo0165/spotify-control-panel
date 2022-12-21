import { Controller } from '@scp/types';

const CallbackController: Controller = (req, res) => res.redirect(process.env.APP_URL);

export default CallbackController;
