import { Router } from "express";
import multer from "multer";

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

import BibliotecaController from "../controllers/BibliotecaController.js";

// Biblioteca
router.post('/biblioteca', upload.single('modeloContrato') ,BibliotecaController.store);
router.get('/biblioteca', BibliotecaController.findAll);
router.get('/biblioteca/:id', BibliotecaController.findByCodigo);
router.put('/biblioteca/:id', upload.single('modeloContrato'), BibliotecaController.updateByCodigo);
router.delete('/biblioteca/:id', BibliotecaController.deleteByCodigo);

export default router;

