import { Router } from "express";
const router = Router();

import LeadController from "../controllers/LeadController.js";

router.post('/lead', LeadController.store);
router.get('/lead/:id', LeadController.findById);
router.get('/lead', LeadController.findAll);
router.put('/lead/:id', LeadController.updateById);
router.delete('/lead/:id', LeadController.deleteById);
router.post('/lead/convertToContact/:id', LeadController.convertToContact);
export default router;