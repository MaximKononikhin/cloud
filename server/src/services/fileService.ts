import fs from 'fs';
import { IFile } from '../models/File';
require('dotenv').config();

class FileService {
  createDir(file: IFile) {
    const filePath = `${process.env.FILE_PATH as string}\\${file.user}\\${file.path}`;
    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath);
          return resolve({ message: 'File was created!' });
        } else {
          return reject({ message: 'File already exist!' });
        }

      } catch (e) {
        console.log(e)
        return reject({ message: 'File error' });
      }
    })
  }

  deleteFile(file: IFile) {
    const path = this.getPath(file);
    if (file.type === 'dir') {
      fs.rmdirSync(path, { recursive: true });
    } else {
      fs.unlinkSync(path);
    }
  }

  getPath(file: IFile) {
    return `${process.env.FILE_PATH}/${file.user}/${file.path}`;
  }
}

export const fileService = new FileService();