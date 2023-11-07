import { Router } from "express";
const router = Router();

import ContatoController from "../controllers/ContatoController.js";
// Contato
router.get('/contato', ContatoController.findAll);
router.post('/contato', ContatoController.store);
router.get('/contato/:id', ContatoController.findById);
router.put('/contato/:id', ContatoController.updateByCodigo);
router.delete('/contato/:id', ContatoController.deleteByCodigo);
router.get('/contrato/contato/:id', ContatoController.relatedList);

export default router