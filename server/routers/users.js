import { Router } from 'express';
import * as userController from '../controllers/users.js';
import { authenticateToken } from '../middleware/auth.js';

const userRouter = Router();

userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.post('/logout', userController.logout);
userRouter.get('/profile', authenticateToken, userController.profile);

export default userRouter;
