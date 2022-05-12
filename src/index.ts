import routes from './routes/index';
import express from 'express';

const app = express();
const port = 3000;

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
