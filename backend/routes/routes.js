import express from 'express';
import { getAllAnimals, addAnimal, getAnimalById, addUser, getAllUsers, getCompatibility, calcularCompatibilidade} from '../controllers/controllers.js';

const router = express.Router();

router.get('/animais', getAllAnimals);      // Rota para obter todos os animais
router.post('/animais', addAnimal);         // Rota para adicionar um novo animal
router.get('/animais/:id', getAnimalById);  // Rota para buscar um animal por ID

router.post('/usuarios', addUser);
router.get('/usuarios', getAllUsers);


router.get('/compatibilidade_usuarios_animais', getCompatibility);
router.get('/compatibilidade_usuarios_animais/:id_usuario', calcularCompatibilidade);


export default router;
