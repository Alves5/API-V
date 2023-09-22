import { Router } from "express";
import multer from "multer";

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

import DocumentoController from "../controllers/DocumentoController.js";

// Documento
router.post('/documento', upload.single('documento'), DocumentoController.store);
router.get('/documento', DocumentoController.findAll);
router.get('/documento/:id', DocumentoController.findById);
router.patch('/documento/:id', upload.single('documento'), DocumentoController.updateById);
router.delete('/documento/:id', DocumentoController.deleteById);


export default router;

