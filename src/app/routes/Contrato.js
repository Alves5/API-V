import { Router } from "express";
const router = Router();

import ContratoController from "../controllers/ContratoController.js";

// Contrato
router.get('/contrato', ContratoController.findAll);
router.post('/contrato', ContratoController.store);
router.get('/contrato/:numeroContrato', ContratoController.findByNumero);
router.put('/contrato/:numeroContrato', ContratoController.updateByNumero);
router.delete('/contrato/:numeroContrato', ContratoController.deleteByNumero);

export default router;