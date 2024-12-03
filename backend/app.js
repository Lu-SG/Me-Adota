import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';

const app = express(); // Initialize the app

const allowedOrigins = ['http://localhost:8080', 'http://127.0.0.1:8080',  'http://127.0.0.1:5500'  ];

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


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/api', routes); // Prefix routes with /api

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});