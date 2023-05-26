import express from 'express';
import path from 'node:path';
import http from 'node:http';
import mongoose from 'mongoose';
import { Server } from 'socket.io';

import { router } from './router';

const connectionpOptions = {
  dbName: 'waiterapp',
  useUnifiedTopology: true,
};

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose
  .connect(
    'mongodb://waiterapp:waiterapp@localhost:27017',
    connectionpOptions
  )
  .then(() => {
    const PORT = 3001;

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      next();
    });

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    server.listen(3001, () =>
      console.log(`🚀Server is running at http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.error('Error while connect to MongoDB', error));
