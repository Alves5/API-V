import { Router } from "express";
const router = Router();

import LeadController from "../controllers/LeadController.js";

router.post('/lead', LeadController.store);
router.get('/leads/:tipView?', LeadController.findAll);
router.get('/lead/:id', LeadController.findById);
router.put('/lead/:id', LeadController.updateById);
router.delete('/lead/:id', LeadController.deleteById);
router.post('/lead/convertToContact/:id', LeadController.convertToContact);
router.post('/lead/multipleLeads', LeadController.deleteMultipleLeads);
export default router;