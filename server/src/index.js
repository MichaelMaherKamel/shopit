import express from 'express';
import config from './config.js';
import connectTODatabase from './database.js';

//Our Routes
import productRoutes from '../routes/productRoutes.js';

const app = express();
connectTODatabase();
app.use(express.json());

app.use('/api/products', productRoutes);

app.listen(config.port, () => {
  console.log(`Server is running at PORT ${config.port}`);
});
