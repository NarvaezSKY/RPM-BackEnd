import { Router } from "express";
import {authRequired} from '../middlewares/validateToken.js';
import {getTasks,getTask,createTasks,updateTasks,deleteTasks,getAllmotos} from '../controllers/motos.controller.js';
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.chema.js";

const router = Router();


router.get('/motos/:id',getTask);
router.post('/motos',createTasks);
router.delete('/motos/:id',deleteTasks);
router.put('/motos/:id',updateTasks);
router.get('/motos',getAllmotos);

export default router;