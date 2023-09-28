import { Router } from "express";
const router = Router();

import ContatoController from "../controllers/ContatoController.js";
// Contato
router.get('/contato', ContatoController.findAll);
router.post('/contato', ContatoController.store);
router.get('/contato/:numero', ContatoController.findByNumero);
router.put('/contato/:numero', ContatoController.updateByNumero);
router.delete('/contato/:numero', ContatoController.deleteByNumero);
router.get('/contrato/contato/:numero', ContatoController.relatedList);

export default router