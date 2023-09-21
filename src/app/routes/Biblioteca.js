import { Router } from "express";
import multer from "multer";

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

import BibliotecaController from "../controllers/BibliotecaController.js";

// Biblioteca
router.post('/biblioteca', upload.single('modeloContrato') ,BibliotecaController.store);
router.get('/biblioteca', BibliotecaController.findAll);
router.get('/biblioteca/:codigo', BibliotecaController.findByCodigo);
router.patch('/biblioteca/:codigo', upload.single('modeloContrato'), BibliotecaController.updateByCodigo);
router.delete('/biblioteca/:codigo', BibliotecaController.deleteByCodigo);

export default router;

