import { Router } from "express";
import {getRuta,createRutas,updateRutas,deleteRutas,getAllRutas} from '../controllers/rutas.controller.js';
const router = Router();

// router.get('/rutas',getTasks);
router.get('/rutas/:id',getRuta);
router.post('/rutas',createRutas);
router.delete('/rutas/:id',deleteRutas);
router.put('/rutas/:id',updateRutas);
router.get('/rutaall',getAllRutas);

export default router;