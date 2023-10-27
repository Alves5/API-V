import { Router } from "express";
const router = Router();

import ContaController from "../controllers/ContaController.js";

// Conta
router.get('/conta', ContaController.findAll);
router.post('/conta', ContaController.store);
router.get('/conta/:id', ContaController.findByNumero);
router.put('/conta/:id', ContaController.updateByNumero);
router.delete('/conta/:id', ContaController.deleteByNumero);

export default router;