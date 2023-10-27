import { Router } from "express";
const router = Router();

import OrcamentoController from '../controllers/OrcamentoController.js';

// Orcamento
router.get('/orcamento', OrcamentoController.findAll);
router.post('/orcamento', OrcamentoController.store);
router.get('/orcamento/:id', OrcamentoController.findByNumero);
router.put('/orcamento/:id', OrcamentoController.updateByNumero);
router.delete('/orcamento/:id', OrcamentoController.deleteByNumero);

export default router;