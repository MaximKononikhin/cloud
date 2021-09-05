import { Request, Response } from "express";
import fs from 'fs';
import { v4 } from 'uuid';
require('dotenv').config();

import { FileModel } from "../models/File";
import { UserModel } from "../models/User";
import { fileService } from "../services/fileService";

class FileController {
  async createDir(req: any, res: Response) {
    try {
      const { name, type, parent } = req.body;
      const file = new FileModel({name, type, parent, user: req.user.id});
      const parentFile = await FileModel.findOne({ _id: parent});

      if (!parentFile) {
        file.path = name;
        await fileService.createDir(file);
      } else {
        file.path = `${parentFile.path}/${file.name}`;
        await fileService.createDir(file);
        parentFile.children.push(file.id);
        await parentFile.save();
      }
      await file.save();
      return res.json(file);
    } catch (e) {
      console.log(e);
      return res.status(400).json(e);
    }
  }

  async getFiles(req: any, res: Response) {
    try {
      const {sort} = req.query;
      let files;
      switch(sort) {
        case 'name':
          files = await FileModel.find({ user: req.user.id, parent: req.query.parent}).sort({ name: 1 });

        case 'type':
          files = await FileModel.find({ user: req.user.id, parent: req.query.parent}).sort({ type: 1 });

        default:
          files = await FileModel.find({ user: req.user.id, parent: req.query.parent});
      }
      return res.json({ files });
    } catch (error) {
      return res.status(500).json({ message: "Can not get files"});
    }
  }

  async uploadFile(req: any, res: Response) {
    try {
      if (req.files) {
        const file = req.files.file;
        const parent = await FileModel.findOne({ user: req.user.id, _id: req.body.parent });
        const user = await UserModel.findOne({ _id: req.user.id });

        if (user?.usedSpace + file.size > user?.diskSpace!) {
          return res.status(400).json({ message: 'There are no space on the disk'});
        }

        user!.usedSpace = user?.usedSpace + file.size;

        let path;

        if (parent) {
          path = `${process.env.FILE_PATH}/${user!._id}/${parent.path}/${file.name}`;
        } else {
          path = `${process.env.FILE_PATH}/${user!.id}/${file.name}`
        }

        if (fs.existsSync(path)){
          return res.status(400).json({ message: 'File is alreaty exist' });
        }

        file.mv(path);

        const type = file.name.split('.').pop();
        let filePath = file.name;

        if (parent) {
          filePath = `${parent.path}/${file.name}`;
        }
        
        const dbFile = new FileModel({
          name: file.name,
          type,
          size: file.size,
          path: filePath,
          parent: parent?._id,
          user: user?._id
        });

        await dbFile.save();
        await user?.save();

        return res.json(dbFile);
      }
      
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Upload error'});
    }
  }

  async downloadFile(req: any, res: Response) {
    try {
      const file = await FileModel.findOne({_id: req.query.id, user: req.user.id});
      const path = fileService.getPath(file!);
      if (fs.existsSync(path)) {
         return res.download(path, file!.name);
      }
      return res.json(400).json({ message: 'File is not found'});
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Download error' });
    }
  }

  async deleteFile(req: any, res: Response) {
    try {
      const file = await FileModel.findOne({ _id: req.query.id, user: req.user.id });
      if (!file) {
        return res.status(400).json({ message: 'File is not found' })
      }

      fileService.deleteFile(file);

      await file.remove();

      return res.json({ message: 'File was deleted'});

    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Dir is not empty' });
    }
  }

  async searchFile(req: any, res: Response) {
    try {
      const searchName = req.query.search;
      let files = await FileModel.find({ user: req.user.id });
      files = files.filter(file => file.name.includes(searchName));
      return res.json({files});
    } catch (error) {
      console.log(error); 
      return res.status(400).json({ message: 'Search error' });
    }
  }

  async uploadAvatar(req: any, res: Response) {
    try {
      const file = req.files.file;
      const user = await UserModel.findById(req.user.id);
      const avatarName = `${v4()}.jpg`;
      if (user && user.avatar.length > 0) {
        fs.unlinkSync(`${process.env.STATIC_PATH}/${user.avatar}`);
      }
      file.mv(`${process.env.STATIC_PATH}/${avatarName}`);
      user!.avatar = avatarName;
      await user?.save();
      return res.json({user});

    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Upload avatar error' });
    }
  }

  async deleteAvatar(req: any, res: Response) {
    try {
      const user = await UserModel.findById(req.user.id);
      fs.unlinkSync(`${process.env.STATIC_PATH}/${user!.avatar}`);
      user!.avatar = '';
      await user!.save();
      return res.json({user});

    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Delete avatar error' });
    }
  }
}

export const fileController = new FileController();