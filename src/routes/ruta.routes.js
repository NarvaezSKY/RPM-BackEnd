import { Router } from "express";
import {getTask,createTasks,updateTasks,deleteTasks,getAlltasks} from '../controllers/rutas.controller.js';
const router = Router();

// router.get('/rutas',getTasks);
router.get('/rutas/:id',getTask);
router.post('/rutas',createTasks);
router.delete('/rutas/:id',deleteTasks);
router.put('/rutas/:id',updateTasks);
router.get('/rutaall',getAlltasks);

export default router;