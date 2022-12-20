import { Request, Response } from 'express';
import { IResponse } from './IResponse';

// @ts-ignore
export type Controller<ResponseBody> = (req: Request, res: IResponse<ResponseBody>) => Omit<any, void>;
