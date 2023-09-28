import { Router } from "express";
const router = Router();

import OrcamentoController from '../controllers/OrcamentoController.js';

// Orcamento
router.get('/orcamento', OrcamentoController.findAll);
router.post('/orcamento', OrcamentoController.store);
router.get('/orcamento/:numeroOrcamento', OrcamentoController.findByNumero);
router.put('/orcamento/:numeroOrcamento', OrcamentoController.updateByNumero);
router.delete('/orcamento/:numeroOrcamento', OrcamentoController.deleteByNumero);

export default router;