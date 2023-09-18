import { Router } from "express";
const router = Router();

import CampanhaController from "../controllers/CampanhaController.js";

// Campanha
router.post('/campanha', CampanhaController.store);
router.get('/campanha/:codigo', CampanhaController.findByCodigo);
router.get('/campanha', CampanhaController.findAll);
router.patch('/campanha/:codigo', CampanhaController.update);
router.delete('/campanha/:codigo', CampanhaController.deleteByCodigo);

export default router;