import { Router } from "express";
import ContatoControllerMongo from "./controllers/ContatoControllerMongo.js";

const router = Router();

// Contato
router.get('/contatos', ContatoControllerMongo.findAll);
router.post('/contatos', ContatoControllerMongo.store);
router.get('/contatos/:numero', ContatoControllerMongo.findByNumero);
router.patch('/contatos/:numero', ContatoControllerMongo.updateByNumero);
router.delete('/contatos/:numero', ContatoControllerMongo.deleteByNumero);

export default router;
