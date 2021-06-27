import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  diskSpace: number;
  usedSpace: number;
  avatar: string;
}

const UserShema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  diskSpace: { type: Number, default: 1024 * 3 * 10 },
  usedSpace: { type: Number, default: 0 },
  avatar: { type: String },
  files: [{ type: Schema.Types.ObjectId, ref: 'File' }],
})

export const UserModel = model<IUser>('User', UserShema);