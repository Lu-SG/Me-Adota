import express from 'express';
import cors from 'cors';
import animalRoutes from './routes/routes.js';

const app = express(); // Initialize the app

const allowedOrigins = ['http://localhost:8080', 'http://127.0.0.1:8080'];

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
    })
);

app.use(express.json());

app.use('/api', animalRoutes); // Prefix routes with /api

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});