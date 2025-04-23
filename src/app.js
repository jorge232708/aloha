const express = require('express');
const cors = require('cors');
const connection = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');

const app = express();
app.use(cors());
app.use(express.json()); // Middleware correcto para JSON

app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
