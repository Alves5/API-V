import { Router } from "express";
const router = Router();

import UsuarioController from "../controllers/UsuarioController.js";

// Usuário
router.get('/usuario', UsuarioController.findAll);
router.post('/usuario', UsuarioController.store);
router.get('/usuario/:username', UsuarioController.findByUsername);
router.put('/usuario/:username', UsuarioController.updateByUsername);
router.delete('/usuario/:username', UsuarioController.deleteByUsername);
router.post('/usuario/ativarUsuario/:token', UsuarioController.activateUserOrRecoverUser);
router.post('/usuario/recuperarUsuario', UsuarioController.recoverUser);
router.post('/usuario/recuperarUsuario/:token', UsuarioController.activateUserOrRecoverUser)
router.get('/usuario/:username/permissions', UsuarioController.PermissionsUser);
router.get('/usuario/relatedList/:email', UsuarioController.relatedList);

export default router;