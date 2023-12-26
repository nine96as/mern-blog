import { Router } from 'express';
import * as userController from '../controllers/users.js';

const userRouter = Router();

userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.get('/logout', userController.logout);

export default userRouter;
