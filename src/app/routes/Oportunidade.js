import { Router } from "express";
const router = Router();

import OportunidadeController from "../controllers/OportunidadeController.js";

// Oportunidade
router.get('/oportunidade', OportunidadeController.findAll);
router.post('/oportunidade', OportunidadeController.store);
router.get('/oportunidade/:numeroOportunidade', OportunidadeController.findByNumero);
router.put('/oportunidade/:numeroOportunidade', OportunidadeController.updateByNumero);
router.delete('/oportunidade/:numeroOportunidade', OportunidadeController.deleteByNumero);

export default router;