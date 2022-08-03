import express from 'express';

import './database/connect';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
const port = process.env.PORT;

app.listen(port, () => console.log(`Server started at http://localhost/${port}`));