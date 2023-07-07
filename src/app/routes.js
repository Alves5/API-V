import { Router } from "express";
import multer from "multer";
import AcessoController from "./controllers/AcessoController.js";
import ArquivoController from "./controllers/ArquivoController.js";
import ArquivoRelacionadoController from "./controllers/ArquivoRelacionadoController.js";
import ChavesController from "./controllers/ChavesController.js";
import ContratoController from "./controllers/ContratoController.js";
import ParcelaController from "./controllers/ParcelaController.js";
import PerfilController from "./controllers/PerfilController.js";
import PermissaoPerfilController from "./controllers/PermissaoPerfilController.js";
import PropostaController from "./controllers/PropostaController.js";
import TaxaController from "./controllers/TaxaController.js";
import UsuarioController from "./controllers/UsuarioController.js";
import ContatoController from "./controllers/ContatoController.js";
import gerar_pdf from "./Utils/gerar_pdf.js";

const router = Router();
const upload = multer({dest: 'uploads/'});

// Acesso
router.get('/Acesso', AcessoController.findAll);
router.post('/Acesso', AcessoController.store);
router.get('/Acesso/:usuario', AcessoController.findByUsuario);
router.put('/Acesso/:usuario', AcessoController.updateByUsuario);
router.delete('/Acesso/:usuario', AcessoController.deleteByUsuario);

// Arquivo
router.get('/Arquivo', ArquivoController.findAll);
router.post('/Arquivo', upload.single('file'), ArquivoController.store );
router.get('/Arquivo/:id', ArquivoController.findById);
router.put('/Arquivo/:id', upload.single('content'), ArquivoController.updateById);
router.delete('/Arquivo/:id', ArquivoController.deleteById);

// Arquivo relacionado
router.get('/ArquivoRelacionado', ArquivoRelacionadoController.findAll);
router.post('/ArquivoRelacionado', ArquivoRelacionadoController.store);
router.get('/ArquivoRelacionado/:id', ArquivoRelacionadoController.findById);
router.put('/ArquivoRelacionado/:id', ArquivoRelacionadoController.updateById);
router.delete('/ArquivoRelacionado/:id', ArquivoRelacionadoController.deleteById);

// Chaves
router.get('/Chaves', ChavesController.findAll);
router.post('/Chaves', ChavesController.store);
router.get('/Chaves/:id', ChavesController.findById);
router.put('/Chaves/:id', ChavesController.updateById);
router.delete('/Chaves/:id', ChavesController.deleteById);

// Contato
router.get('/Contato', ContatoController.findAll);
router.post('/Contato', ContatoController.store);
router.get('/Contato/:numero', ContatoController.findByNumero);
router.put('/Contato/:numero', ContatoController.updateByNumero);
router.delete('/Contato/:numero', ContatoController.deleteByNumero);
router.get('/:objeto/Contato/:numero', ContatoController.findRelatedList);

// Contrato
router.get('/Contrato', ContratoController.findAll);
router.post('/Contrato', ContratoController.store);
router.get('/Contrato/:numero', ContratoController.findByNumeroContrato);
router.put('/Contrato/:numero', ContratoController.updateById);
router.delete('/Contrato/:numero', ContratoController.deleteById);
router.get('/ArquivoRelacionado/Contrato/:numero', ContratoController.findRelatedList);

// Parcela
router.get('/Parcela', ParcelaController.findAll);
router.post('/Parcela', ParcelaController.store);
router.get('/Parcela/:numero', ParcelaController.findByNumero);
router.put('/Parcela/:numero', ParcelaController.updateByNumero);
router.delete('/Parcela/:numero', ParcelaController.deleteByNumero);

// Perfil
router.get('/Perfil', PerfilController.findAll);
router.post('/Perfil', PerfilController.store);
router.get('/Perfil/:nome', PerfilController.findByNome);
router.put('/Perfil/:nome', PerfilController.updateByNome);
router.delete('/Perfil/:nome', PerfilController.deleteByNome);

// Permissão do perfil
router.get('/PermissaoPerfil', PermissaoPerfilController.findAll);
router.post('/PermissaoPerfil', PermissaoPerfilController.store);
router.get('/PermissaoPerfil/:codigo', PermissaoPerfilController.findByCodigo);
router.put('/PermissaoPerfil/:codigo', PermissaoPerfilController.updateByCodigo);
router.delete('/PermissaoPerfil/:codigo', PermissaoPerfilController.deleteByCodigo);

// Proposta
router.get('/Proposta', PropostaController.findAll);
router.post('/Proposta', PropostaController.store);
router.get('/Proposta/:numero', PropostaController.findByNumeroProposta);
router.put('/Proposta/:numero', PropostaController.updateByNumeroProposta);
router.delete('/Proposta/:numero', PropostaController.deleteByNumeroProposta);
router.get('/:objeto/Proposta/:numero', PropostaController.findRelatedList);

// Taxa
router.get('/Taxa', TaxaController.findAll);
router.post('/Taxa', TaxaController.store);
router.get('/Taxa/:id', TaxaController.findById);
router.put('/Taxa/:id', TaxaController.updateById);
router.delete('/Taxa/:id', TaxaController.deleteById);

// Usuário
router.get('/Usuario', UsuarioController.findAll);
router.post('/Usuario', UsuarioController.store);
router.get('/Usuario/:email', UsuarioController.findByEmail);
router.put('/Usuario/UpdateByEmail', UsuarioController.updateByEmail);
router.delete('/Usuario/:email', UsuarioController.deleteByEmail);
router.post('/login', UsuarioController.login); // Verifica se o usuário existe no BD
router.post('/RecuperarConta', UsuarioController.retrieveAccount); // Verifica se o usuário existe e troca a senha dele
router.post('/CriarNovaSenha', UsuarioController.activateAccount);
router.post('/AtivarConta', UsuarioController.activateAccount); // Verifica se existe o token e ativa o usuário criando um senha para ele
router.post('/AtualizarNome', UsuarioController.updateNome); // Atualiza o nome do usuário atráves do email
router.get('/Contato/Usuario/:email', UsuarioController.findRelatedList);
// Ainda em teste
router.get('/TesteEmail', UsuarioController.testeEmail);

router.get('/TesteCreateContract/:numero', ContratoController.createContract);
// router.get('/TesteContrato', (req, res) => {
//     try {
//         gerar_pdf.gerarPDF();
//         res.json({message: 'Deu bom o contrato'})
//     }catch (e) {
//      res.json(e);
//     }
// });

export default router;
