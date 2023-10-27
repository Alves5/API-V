import { Router } from "express";
const router = Router();

import ContratoController from "../controllers/ContratoController.js";

// Contrato
router.get('/contrato', ContratoController.findAll);
router.post('/contrato', ContratoController.store);
router.get('/contrato/:id', ContratoController.findByNumero);
router.put('/contrato/:id', ContratoController.updateByNumero);
router.delete('/contrato/:id', ContratoController.deleteByNumero);

export default router;