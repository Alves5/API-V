import { Router } from "express";
const router = Router();

import PerfilController from "../controllers/PerfilController.js";

// Perfil
router.post('/perfil', PerfilController.store);
router.get('/perfil/:nome', PerfilController.findByNome);
router.get('/perfil', PerfilController.findAll);
router.put('/perfil/:nome', PerfilController.update);
router.delete('/perfil/:nome', PerfilController.deleteByNome);

export default router;