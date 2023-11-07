import { Router } from "express";
const router = Router();

import OrcamentoController from '../controllers/OrcamentoController.js';

// Orcamento
router.get('/orcamento', OrcamentoController.findAll);
router.post('/orcamento', OrcamentoController.store);
router.get('/orcamento/:id', OrcamentoController.findById);
router.put('/orcamento/:id', OrcamentoController.updateById);
router.delete('/orcamento/:id', OrcamentoController.deleteById);

export default router;