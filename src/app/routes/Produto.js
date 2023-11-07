import { Router } from "express";
const router = Router();

import ProdutoController from "../controllers/ProdutoController.js";

// Tarefa
router.post('/produto', ProdutoController.store);
router.get('/produto/:id', ProdutoController.findById);
router.get('/produto', ProdutoController.findAll);
router.put('/produto/:id', ProdutoController.update);
router.delete('/produto/:id', ProdutoController.deleteById);

export default router;