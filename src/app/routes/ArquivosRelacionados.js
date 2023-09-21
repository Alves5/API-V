import { Router } from "express";
import multer from "multer";
const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

import ArquivoRelacionadoController from "../controllers/ArquivoRelacionadoController.js";

router.post('/arquivosrelacionados', upload.single('arquivo'), ArquivoRelacionadoController.store);
router.get('/arquivosrelacionados', ArquivoRelacionadoController.index);
router.get('/arquivosrelacionados/:id', ArquivoRelacionadoController.show);
router.put('/arquivosrelacionados/:id', upload.single('arquivo'), ArquivoRelacionadoController.update);
router.delete('/arquivosrelacionados/:id', ArquivoRelacionadoController.delete);

export default router;

