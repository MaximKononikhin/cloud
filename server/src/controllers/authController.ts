import { compareSync, hash } from "bcryptjs";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import jwt from 'jsonwebtoken';

import { FileModel } from "../models/File";
import { IUser, UserModel } from "../models/User";
import { fileService } from "../services/fileService";

class AuthController {
    async registration (req: Request, res: Response) {
        
    try {
        const errors = validationResult(req);
  
        if (!errors.isEmpty()) {
          return res.status(400).json({ message:'Registration error' });
        }
  
        const { email, password, firstName, secondName } = req.body;
  
        const candidate = await UserModel.findOne({ email });
  
        if (candidate) {
          return res.status(400).json({ message: `User with email ${email} is already exist`});
        }
  
        const hashPassword = await hash(password, 8);
        const user = new UserModel({ email, password: hashPassword, firstName, secondName });
        await user.save();
        await fileService.createDir(new FileModel({ user: user.id, name: ''}))
        
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY as string, {expiresIn: '0'});
  
        res.cookie('authToken', token, { httpOnly: true });
        return res
          .json({
            user: {
              id: user.id,
              email: user.email,
              firstName: user.firstName,
              secondName: user.secondName,
              diskSpace: user.diskSpace,
              usedSpace: user.usedSpace,
              avatar: user.avatar,
            }
          })
        
      } catch(e) {
        console.log(e);
        res.send({ message: 'Server error '});
      }
    }

    async login (req: Request, res: Response) {
        try {
            const { email, password } = req.body;
      
            const user = await UserModel.findOne({ email });
      
            if (!user) {
              return res.status(404).json({ message: 'User not found' });
            }
      
            const isPassValid = compareSync(password, user.password);
      
            if (!isPassValid) {
              return res.status(400).json({ message: 'Invalid password'});
            }
      
            const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY as string, { expiresIn: '1h'});
      
            res.cookie('authToken', token, { httpOnly: true });
      
            return res
              .json({
                user: {
                  id: user.id,
                  email: user.email,
                  firstName: user.firstName,
                  secondName: user.secondName,
                  diskSpace: user.diskSpace,
                  usedSpace: user.usedSpace,
                  avatar: user.avatar,
                }
              })
      
        } catch(e) {
            console.log(e);
            res.send({ message: 'Server error '});
        }
    }

    async logout (req: Request, res: Response) {
        try {
            res.clearCookie('authToken');
            return res.json({ message: 'User was logout'});
        } catch (e) {
            console.log(e);
            res.send({ message: 'Server error '});
        }
    }

    async auth (req: Request, res: Response) {
        try {
            const user = await UserModel.findOne({ _id: (req as any).user.id}) as IUser
      
            return res.json({
              user: {
                id: user.id,
                email: user.email,            
                firstName: user.firstName,
                secondName: user.secondName,
                diskSpace: user.diskSpace,
                usedSpace: user.usedSpace,
                avatar: user.avatar,
              }
            })
        } catch(e) {
            console.log(e);
            res.send({ message: 'Server error '});
        }
    }
};

export const authController = new AuthController();