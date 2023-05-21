import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

const connectionpOptions = {
  dbName: 'waiterapp',
  useUnifiedTopology: true,
};

mongoose
  .connect(
    'mongodb://waiterapp:waiterapp@localhost:27017',
    connectionpOptions
  )
  .then(() => {
    const app = express();
    const PORT = 3001;

    app.use(express.json());
    app.use(router);

    app.listen(3001, () =>
      console.log(`🚀Server is running at http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.error('Error while connect to MongoDB', error));
