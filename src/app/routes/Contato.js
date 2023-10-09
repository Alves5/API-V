import { Router } from "express";
const router = Router();

import ContatoController from "../controllers/ContatoController.js";
// Contato
router.get('/contato', ContatoController.findAll);
router.post('/contato', ContatoController.store);
router.get('/contato/:codigo', ContatoController.findByCodigo);
router.put('/contato/:codigo', ContatoController.updateByCodigo);
router.delete('/contato/:codigo', ContatoController.deleteByCodigo);
router.get('/contrato/contato/:codigo', ContatoController.relatedList);

export default router