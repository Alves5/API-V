import { Router } from "express";
import ContatoControllerMongo from "./controllers/ContatoControllerMongo.js";
import BibliotecaController from "./controllers/BibliotecaController.js";
import LeadController from "./controllers/LeadController.js";
import CampanhaController from "./controllers/CampanhaController.js";

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

// Lead
router.post('/lead', LeadController.store);
router.get('/lead/:codigo', LeadController.findByCodigo);
router.get('/lead', LeadController.findAll);
router.patch('/lead/:codigo', LeadController.updateByCodigo);
router.delete('/lead/:codigo', LeadController.deleteByCodigo);

// Campanha
router.post('/campanha', CampanhaController.store);
router.get('/campanha/:codigo', CampanhaController.findByCodigo);
router.get('/campanha', CampanhaController.findAll);
router.patch('/campanha/:codigo', CampanhaController.update);
router.delete('/campanha/:codigo', CampanhaController.deleteByCodigo);

export default router;
