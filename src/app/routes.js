import { Router } from "express";
import ArquivoRelacionado from "./routes/ArquivosRelacionados.js";
import Campanha from "./routes/Campanha.js";
import Documento from "./routes/Documento.js";
import Conta from "./routes/Conta.js";
import Lead from "./routes/Lead.js";
import Oportunidade from "./routes/Oportunidade.js";
import Biblioteca from "./routes/Biblioteca.js";
import Usuario from "./routes/Usuario.js";
import Contato from "./routes/Contato.js";
import Contrato from "./routes/Contrato.js";
import Orcamento from "./routes/Orcamento.js";
import Perfil from "./routes/Perfil.js";

const router = Router();

// Rotas
router.use(Documento);
router.use(ArquivoRelacionado)
router.use(Contato);
router.use(Campanha);
router.use(Conta);
router.use(Lead);
router.use(Oportunidade);
router.use(Biblioteca);
router.use(Usuario);
router.use(Contrato);
router.use(Orcamento);
router.use(Perfil);

export default router;
