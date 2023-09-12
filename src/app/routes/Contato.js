import { Router } from "express";
const router = Router();

import ContatoControllerMongo from "../controllers/ContatoControllerMongo.js";
// Contato
router.get('/contato', ContatoControllerMongo.findAll);
router.post('/contato', ContatoControllerMongo.store);
router.get('/contato/:numero', ContatoControllerMongo.findByNumero);
router.patch('/contato/:numero', ContatoControllerMongo.updateByNumero);
router.delete('/contato/:numero', ContatoControllerMongo.deleteByNumero);

export default router