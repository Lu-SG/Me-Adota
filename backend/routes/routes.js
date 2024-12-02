import express from 'express';
import { getAllAnimals, addAnimal, getAnimalById, addUser, getAllUsers, calcularCompatibilidade, checkEmail, setarDados, atualizarUsuario, excluirConta} from '../controllers/controllers.js';
const router = express.Router();




router.get('/animais', getAllAnimals);      // Rota para obter todos os animais
router.post('/animais', addAnimal);         // Rota para adicionar um novo animal
router.get('/animais/:id_animal', getAnimalById);  // Rota para buscar um animal por ID

router.post('/usuarios', addUser);
router.get('/usuarios', getAllUsers);

router.post('/usuarios/checkEmail', checkEmail);

router.post('/usuarios/setarDados/:email', setarDados);
router.put('/usuarios/atualizarUsuario/:email', atualizarUsuario);
router.delete('/usuarios/excluirConta/:email', excluirConta);

router.get('/usuarios/animais/:email', calcularCompatibilidade);

export default router;


  
