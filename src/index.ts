import express from 'express';

const app = express();

const PORT = 3001;

app.listen(3001, () =>
  console.log(`Server is running at http://localhost:${PORT}`));
