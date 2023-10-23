import { Router } from "express";
const router = Router();

import ProcessoQualificacaoController from "../controllers/ProcessoQualificacaoController.js";

router.post('/processo', ProcessoQualificacaoController.store);
router.get('/processo/:apiNome', ProcessoQualificacaoController.findByApiNome);
router.get('/processo', ProcessoQualificacaoController.findAll);
router.put('/processo/:apiNome', ProcessoQualificacaoController.update);
router.delete('/processo/:apiNome', ProcessoQualificacaoController.deleteByNome);

export default router;