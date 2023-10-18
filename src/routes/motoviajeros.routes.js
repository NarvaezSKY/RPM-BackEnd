
import {Router  } from "express";
import { getAllMotoviajeros, createMotoviajero, updateMotoviajero  } from "../controllers/motoviajero.controllers.js";
const router= Router();


router.get('/', getAllMotoviajeros)
router.post('/register', createMotoviajero )
router.put('/:id',updateMotoviajero )
// router.delete('/:id', getMotoviajero )
// router.get('/:id', deleteMotoviajero )

export default router;
