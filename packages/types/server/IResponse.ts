import { Response as ExpressResponse } from 'express';
import { Send } from 'express-serve-static-core';

export interface IResponse<ResponseBody> extends ExpressResponse {
  json: Send<ResponseBody, this>;
}
