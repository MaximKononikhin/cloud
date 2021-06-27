import { Schema, model } from "mongoose";

export interface IFile {
  name: string,
  type: string,
  accessLink: string,
  size: number,
  path: string,
  user: any,
  parent: any,
  children: any[],
}

const FileShema = new Schema({
  name: { type: String, required: true},
  type: { type: String, required: true },
  accessLink: { type: String },
  size: { type: Number, default: 0 },
  path: { type: String, default: '' },
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  parent: {type: Schema.Types.ObjectId, ref: 'File'},
  children: [{type: Schema.Types.ObjectId, ref: 'File'}],
})

export const FileModel = model<IFile>('File', FileShema);