import { Router } from "express";
const router = Router();

import CampanhaController from "../controllers/CampanhaController.js";

// Campanha
router.post('/campanha', CampanhaController.store);
router.get('/campanha/:id', CampanhaController.findByCodigo);
router.get('/campanha', CampanhaController.findAll);
router.put('/campanha/:id', CampanhaController.update);
router.delete('/campanha/:id', CampanhaController.deleteByCodigo);

export default router;