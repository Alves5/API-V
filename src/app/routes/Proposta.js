import { Router } from "express";
const router = Router();

import PropostaController from "../controllers/PropostaController.js";

// Contrato
router.get('/proposta', PropostaController.findAll);
router.post('/proposta', PropostaController.store);
router.get('/proposta/:id', PropostaController.findById);
router.put('/proposta/:id', PropostaController.updateById);
router.delete('/proposta/:id', PropostaController.deleteById);

export default router;