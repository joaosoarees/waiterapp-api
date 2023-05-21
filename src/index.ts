import express from 'express';
import mongoose from 'mongoose';

mongoose
  .connect('mongodb://waiterapp:waiterapp@localhost:27017/')
  .then(() => {
    const app = express();
    const PORT = 3001;

    app.listen(3001, () =>
      console.log(`Server is running at http://localhost:${PORT}`)
    );
  })
  .catch(() => console.error('Error while connect to MongoDB'));
