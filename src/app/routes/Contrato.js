import { Router } from "express";
const router = Router();

import ContratoController from "../controllers/ContratoController.js";

// Contrato
router.get('/contrato', ContratoController.findAll);
router.post('/contrato', ContratoController.store);
router.get('/contrato/:id', ContratoController.findById);
router.put('/contrato/:id', ContratoController.updateById);
router.delete('/contrato/:id', ContratoController.deleteById);

export default router;