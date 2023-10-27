import { Router } from "express";
const router = Router();

import OportunidadeController from "../controllers/OportunidadeController.js";

// Oportunidade
router.get('/oportunidade', OportunidadeController.findAll);
router.post('/oportunidade', OportunidadeController.store);
router.get('/oportunidade/:id', OportunidadeController.findByNumero);
router.put('/oportunidade/:id', OportunidadeController.updateByNumero);
router.delete('/oportunidade/:id', OportunidadeController.deleteByNumero);

export default router;