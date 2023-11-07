import { Router } from "express";
import multer from "multer";

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

import BibliotecaController from "../controllers/BibliotecaController.js";

// Biblioteca
router.post('/biblioteca', upload.single('modeloContrato') ,BibliotecaController.store);
router.get('/biblioteca', BibliotecaController.findAll);
router.get('/biblioteca/:id', BibliotecaController.findById);
router.put('/biblioteca/:id', upload.single('modeloContrato'), BibliotecaController.updateById);
router.delete('/biblioteca/:id', BibliotecaController.deleteById);

export default router;

