import cors from 'cors';
import express from 'express';
import logger from 'morgan';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Blog API',
    description: 'TBC',
    endpoints: []
  });
});
