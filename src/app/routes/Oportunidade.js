import { Router } from "express";
const router = Router();

import OportunidadeController from "../controllers/OportunidadeController.js";

// Oportunidade
router.get('/oportunidade', OportunidadeController.findAll);
router.post('/oportunidade', OportunidadeController.store);
router.get('/oportunidade/:id', OportunidadeController.findById);
router.put('/oportunidade/:id', OportunidadeController.updateById);
router.delete('/oportunidade/:id', OportunidadeController.deleteById);

export default router;