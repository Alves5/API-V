import { Router } from "express";
import Campanha from "./routes/Campanha.js";
import Conta from "./routes/Conta.js";
import Lead from "./routes/Lead.js";
import Oportunidade from "./routes/Oportunidade.js";
import Biblioteca from "./routes/Biblioteca.js";
import Usuario from "./routes/Usuario.js";
import Contato from "./routes/Contato.js";
import Contrato from "./routes/Contrato.js";
import Orcamento from "./routes/Orcamento.js";

const router = Router();

// Rotas
router.use(Contato);
router.use(Campanha);
router.use(Conta);
router.use(Lead);
router.use(Oportunidade);
router.use(Biblioteca);
router.use(Usuario);
router.use(Contrato);
router.use(Orcamento);

export default router;
