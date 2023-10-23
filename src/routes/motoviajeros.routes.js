
import {Router  } from "express";
import { login,getAllMotoviajeros, createMotoviajero, updateMotoviajero, getMotoviajero, deleteMotoviajero, logout } from "../controllers/motoviajero.controllers.js";
const router= Router();


router.get('/', getAllMotoviajeros)
router.post('/register', createMotoviajero)
router.put('/:id',updateMotoviajero)
router.get('/:id', getMotoviajero)
router.delete('/:id', deleteMotoviajero)
router.post('/login',login);
router.post('/logout',logout);


export default router;
