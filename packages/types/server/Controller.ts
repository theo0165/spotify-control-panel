import { Request, Response } from 'express';

// @ts-ignore
export type Controller = (req: Request, res: Response) => any;
