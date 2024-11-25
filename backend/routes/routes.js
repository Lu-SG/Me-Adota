import express from 'express';
import { getAllAnimals, addAnimal, getAnimalById, addUser, getAllUsers, calcularCompatibilidade} from '../controllers/controllers.js';

const router = express.Router();

router.get('/animais', getAllAnimals);      // Rota para obter todos os animais
router.post('/animais', addAnimal);         // Rota para adicionar um novo animal
router.get('/animais/:id_animal', getAnimalById);  // Rota para buscar um animal por ID

router.post('/usuarios', addUser);
router.get('/usuarios', getAllUsers);


router.get('/usuarios/:id_usuario', calcularCompatibilidade);


export default router;
