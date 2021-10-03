import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  firstName: string;
  secondName: string;
  password: string;
  diskSpace: number;
  usedSpace: number;
  avatar: string;
}

const UserShema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  secondName: { type: String, required: true },
  password: { type: String, required: true },
  diskSpace: { type: Number, default: 1024 * 3 * 10 },
  usedSpace: { type: Number, default: 0 },
  avatar: { type: String },
})

export const UserModel = model<IUser>('User', UserShema);