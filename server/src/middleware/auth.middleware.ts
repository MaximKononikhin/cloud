import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken'
require('dotenv').config();

export const authMiddleware = (req: any, res: any, next: any) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const token = req.headers.authorization!;

    if (!token) {
      return res.status(401).json({ message: 'Auth error'});
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
    req.user = decoded;
    next();
  } catch(e) {
    return res.status(401).json({ message: 'Auth error'});
  }
} 