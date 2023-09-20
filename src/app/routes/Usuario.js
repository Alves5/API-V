import { Router } from "express";
const router = Router();

import UsuarioController from "../controllers/UsuarioController.js";

// Usuário
router.get('/usuario', UsuarioController.findAll);
router.post('/usuario', UsuarioController.store);
router.get('/usuario/:username', UsuarioController.findByUsername);
router.patch('/usuario/:username', UsuarioController.updateByUsername);
router.delete('/usuario/:username', UsuarioController.deleteByUsername);
router.post('/usuario/ativarUsuario/:token', UsuarioController.activateUserOrRecoverUser);
router.post('/usuario/userLogin', UsuarioController.userLogin);
router.post('/usuario/recuperarUsuario', UsuarioController.recoverUser);
router.post('/usuario/recuperarUsuario/:token', UsuarioController.activateUserOrRecoverUser)

export default router;