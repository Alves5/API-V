import { Router } from "express";
import ContatoControllerMongo from "./controllers/ContatoControllerMongo.js";
import BibliotecaController from "./controllers/BibliotecaController.js";
import LeadController from "./controllers/LeadController.js";
import CampanhaController from "./controllers/CampanhaController.js";
import ContaController from "./controllers/ContaController.js";
import ContratoController from "./controllers/ContratoController.js";
import OportunidadeController from "./controllers/OportunidadeController.js";
import OrcamentoController from "./controllers/OrcamentoController.js";
import UsuarioController from "./controllers/UsuarioController.js";

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

// Conta
router.get('/conta', ContaController.findAll);
router.post('/conta', ContaController.store);
router.get('/conta/:numeroConta', ContaController.findByNumero);
router.patch('/conta/:numeroConta', ContaController.updateByNumero);
router.delete('/conta/:numeroConta', ContaController.deleteByNumero);

// Contrato
router.get('/contrato', ContratoController.findAll);
router.post('/contrato', ContratoController.store);
router.get('/contrato/:numeroContrato', ContratoController.findByNumero);
router.patch('/contrato/:numeroContrato', ContratoController.updateByNumero);
router.delete('/contrato/:numeroContrato', ContratoController.deleteByNumero);

// Oportunidade
router.get('/oportunidade', OportunidadeController.findAll);
router.post('/oportunidade', OportunidadeController.store);
router.get('/oportunidade/:numeroOportunidade', OportunidadeController.findByNumero);
router.patch('/oportunidade/:numeroOportunidade', OportunidadeController.updateByNumero);
router.delete('/oportunidade/:numeroOportunidade', OportunidadeController.deleteByNumero);

// Orcamento
router.get('/orcamento', OrcamentoController.findAll);
router.post('/orcamento', OrcamentoController.store);
router.get('/orcamento/:numeroOrcamento', OrcamentoController.findByNumero);
router.patch('/orcamento/:numeroOrcamento', OrcamentoController.updateByNumero);
router.delete('/orcamento/:numeroOrcamento', OrcamentoController.deleteByNumero);

// Usuário
router.get('/usuario', UsuarioController.findAll);
router.post('/usuario', UsuarioController.store);
router.get('/usuario/:username', UsuarioController.findByUsername);
router.patch('/usuario/:username', UsuarioController.updateByUsername);
router.delete('/usuario/:username', UsuarioController.deleteByUsername);

export default router;
