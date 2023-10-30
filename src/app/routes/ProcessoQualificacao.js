import { Router } from "express";
const router = Router();

import ProcessoQualificacaoController from "../controllers/ProcessoQualificacaoController.js";

router.post('/processo', ProcessoQualificacaoController.store);
router.get('/processo/:id', ProcessoQualificacaoController.findById);
router.get('/processo', ProcessoQualificacaoController.findAll);
router.put('/processo/:id', ProcessoQualificacaoController.updateById);
router.delete('/processo/:id', ProcessoQualificacaoController.deleteById);

export default router;