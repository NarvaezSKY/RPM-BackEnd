import { Router } from "express";
import {authRequired} from '../middlewares/validateToken.js';

import {getAllRutas, createRutas, getRuta, deleteRutas,updateRutas} from '../controllers/rutas.controller.js';
const router = Router();

router.get('/rutas',authRequired,getAllRutas);
router.get('/rutas/:id',authRequired,getRuta);
router.post('/rutas',authRequired,createRutas);
router.delete('/rutas/:id',authRequired,deleteRutas);
router.put('/rutas/:id',authRequired,updateRutas);


//rutas admin
// router.get('/admin/rutas',adminRequired,getAllRutas); //conttinuara


//todas funcionales con authRequired sisi  
//navegador defectuoso
export default router;