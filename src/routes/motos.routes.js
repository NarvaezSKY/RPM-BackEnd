import { Router } from "express";
import {getOneMoto,createMoto,updateMoto,deleteMoto, getAllmotos} from '../controllers/motos.controller.js';

import {authRequired  } from "../middlewares/validateToken.js";


const router = Router();


router.get('/motos',authRequired,getAllmotos);
router.post('/motos',authRequired,createMoto);
router.get('/motos/:id',authRequired,getOneMoto);
router.delete('/motos/:id',authRequired,deleteMoto);
router.put('/motos/:id',authRequired,updateMoto);

export default router;