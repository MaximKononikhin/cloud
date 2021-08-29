import { Router } from "express";
import { check } from "express-validator";
require('dotenv').config();

import { authMiddleware } from '../middleware/auth.middleware';
import { authController } from "../controllers/authController";

export const authRouter =  Router();

authRouter.post(
  '/registration',
  [
    check('email', 'Incorrect email').isEmail(),
    check('password', 'Password should be longer than 3 and shorter than 12').isLength({ min: 3, max: 12 }),
  ],
  authController.registration
);

authRouter.post('/login', authController.login);

authRouter.get('/logout', authMiddleware, authController.logout);

authRouter.get('/auth', authMiddleware, authController.auth);