import { Router } from "express";
const router = Router();

import ContaController from "../controllers/ContaController.js";

// Conta
router.get('/conta', ContaController.findAll);
router.post('/conta', ContaController.store);
router.get('/conta/:numeroConta', ContaController.findByNumero);
router.put('/conta/:numeroConta', ContaController.updateByNumero);
router.delete('/conta/:numeroConta', ContaController.deleteByNumero);

export default router;