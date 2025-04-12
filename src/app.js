const express = require('express');
const cors = require('cors');

const app = express();

// Permitir conexiones desde React (puerto 3000)
app.use(cors({
  origin: 'http://localhost:3000', // Cambia si el front está desplegado
  credentials: true
}));

app.use(express.json());

// Rutas
const categoryRoutes = require('./routes/category.routes');
const productRoutes = require('./routes/product.routes');

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

module.exports = app;
