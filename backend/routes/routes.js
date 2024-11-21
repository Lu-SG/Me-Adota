import express from 'express';
import { getAllAnimals, addAnimal, getAnimalById } from '../controllers/controllers.js';

const router = express.Router();

router.get('/animais', getAllAnimals);      // Rota para obter todos os animais
router.post('/animais', addAnimal);         // Rota para adicionar um novo animal
router.get('/animais/:id', getAnimalById);  // Rota para buscar um animal por ID

export default router;
