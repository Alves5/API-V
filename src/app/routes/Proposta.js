import { Router } from "express";
const router = Router();

import PropostaController from "../controllers/PropostaController.js";

// Contrato
router.get('/proposta', PropostaController.findAll);
router.post('/proposta', PropostaController.store);
router.get('/proposta/:numeroProposta', PropostaController.findByNumero);
router.put('/proposta/:numeroProposta', PropostaController.updateByNumero);
router.delete('/proposta/:numeroProposta', PropostaController.deleteByNumero);

export default router;