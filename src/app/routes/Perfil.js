import { Router } from "express";
const router = Router();

import PerfilController from "../controllers/PerfilController.js";

// Perfil
router.post('/perfil', PerfilController.store);
router.get('/perfil/:id', PerfilController.findById);
router.get('/perfil', PerfilController.findAll);
router.put('/perfil/:id', PerfilController.updateById);
router.delete('/perfil/:id', PerfilController.deleteById);

export default router;