
import {Router  } from "express";
import { login,getAllMotoviajeros, createMotoviajero, updateMotoviajero, getMotoviajero, deleteMotoviajero } from "../controllers/motoviajero.controllers.js";
const router= Router();


router.get('/', getAllMotoviajeros)
router.post('/register', createMotoviajero)
router.put('/:id',updateMotoviajero)
router.get('/:id', getMotoviajero)
router.delete('/:id', deleteMotoviajero)
router.post('/login2',login);

export default router;
