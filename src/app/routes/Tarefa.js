import { Router } from "express";
const router = Router();

import TarefaController from "../controllers/TarefaController.js";

// Tarefa
router.post('/tarefa', TarefaController.store);
router.get('/tarefa/:id', TarefaController.findById);
router.get('/tarefa', TarefaController.findAll);
router.patch('/tarefa/:id', TarefaController.update);
router.delete('/tarefa/:id', TarefaController.deleteById);

export default router;