import { Router, Request, Response } from "express";
import { fileController } from "../controllers/fileController";
import { authMiddleware } from '../middleware/auth.middleware';

export const fileRouter =  Router();

fileRouter.post('', authMiddleware, fileController.createDir);
fileRouter.post('/upload', authMiddleware, fileController.uploadFile);
fileRouter.post('/avatar', authMiddleware, fileController.uploadAvatar);
fileRouter.get('', authMiddleware, fileController.getFiles);
fileRouter.get('/search', authMiddleware, fileController.searchFile);
fileRouter.get('/download', authMiddleware, fileController.downloadFile);
fileRouter.delete('/', authMiddleware, fileController.deleteFile);
fileRouter.delete('/avatar', authMiddleware, fileController.deleteAvatar);