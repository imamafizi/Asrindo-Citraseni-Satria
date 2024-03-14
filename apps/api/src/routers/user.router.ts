import { UserController } from '@/controllers/user.controller';
import { Router } from 'express';

export class UserRouter {
  private router: Router;
  private UserController: UserController;

  constructor() {
    this.UserController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    // this.router.get('/', this.sampleController.getSampleData);
    this.router.get('/', this.UserController.getUserEmail);
  }

  getRouter(): Router {
    return this.router;
  }
}
