import { getUserAction } from '@/actions/user/getUserAction';
import prisma from '@/prisma';
import { NextFunction, Request, Response } from 'express';

export class UserController {
  async getUserEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getUserAction();

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
