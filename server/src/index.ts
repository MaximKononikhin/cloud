import express, {Application} from 'express';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';
require('dotenv').config();

import { authRouter } from './routes/auth.routes';
import { fileRouter } from './routes/file.routes';
import { corsMiddleware } from './middleware/cors.middleware';

const app: Application = express();
const PORT = process.env.PORT;

app.use(fileUpload({}));
app.use(corsMiddleware);
app.use(express.json());
app.use(cookieParser());
app.use(express.static(__dirname + '/static'));
app.use('/api/auth', authRouter);
app.use('/api/files', fileRouter);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL as string, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(PORT, () => console.log('Server started at', PORT));
  } catch (e) {
    console.log(e);
  }
};

start();
