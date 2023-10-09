import { Router } from "express";
const router = Router();

import LeadController from "../controllers/LeadController.js";

// Lead
router.post('/lead', LeadController.store);
router.get('/lead/:codigo', LeadController.findByCodigo);
router.get('/lead', LeadController.findAll);
router.put('/lead/:codigo', LeadController.updateByCodigo);
router.delete('/lead/:codigo', LeadController.deleteByCodigo);
router.post('/lead/convertToContact/:codigo', LeadController.convertToContact);
export default router;