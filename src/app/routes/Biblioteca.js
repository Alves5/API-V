import { Router } from "express";
const router = Router();

import BibliotecaController from "../controllers/BibliotecaController.js";

// Biblioteca
router.post('/biblioteca', BibliotecaController.store);
router.get('/biblioteca', BibliotecaController.findAll);
router.get('/biblioteca/:codigo', BibliotecaController.findByCodigo);
router.patch('/biblioteca/:codigo', BibliotecaController.updateByCodigo);
router.delete('/biblioteca/:codigo', BibliotecaController.deleteByCodigo);

export default router;

