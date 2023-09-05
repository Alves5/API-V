import { Router } from "express";
import ContatoControllerMongo from "./controllers/ContatoControllerMongo.js";
import BibliotecaController from "./controllers/BibliotecaController.js";

const router = Router();

// Contato
router.get('/contato', ContatoControllerMongo.findAll);
router.post('/contato', ContatoControllerMongo.store);
router.get('/contato/:numero', ContatoControllerMongo.findByNumero);
router.patch('/contato/:numero', ContatoControllerMongo.updateByNumero);
router.delete('/contato/:numero', ContatoControllerMongo.deleteByNumero);

// Biblioteca
router.post('/biblioteca', BibliotecaController.store);
router.get('/biblioteca', BibliotecaController.findAll);
router.get('/biblioteca/:codigo', BibliotecaController.findByCodigo);
router.patch('/biblioteca/:codigo', BibliotecaController.updateByCodigo);
router.delete('/biblioteca/:codigo', BibliotecaController.deleteByCodigo);

export default router;
