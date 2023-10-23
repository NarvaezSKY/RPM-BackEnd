import { Router } from "express";
import {authRequired} from '../middlewares/validateToken.js';
import {getTasks,getTask,createTasks,updateTasks,deleteTasks,getAlltasks} from '../controllers/tasks.controllers.js';
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.chema.js";

const router = Router();

// router.get('/tasks',authRequired,getTasks);
// router.get('/tasks/:id',authRequired,getTask);
// router.post('/tasks',authRequired,validateSchema(createTaskSchema),createTasks);
// router.delete('/tasks/:id',authRequired,deleteTasks);
// router.put('/tasks/:id',authRequired,updateTasks);
// router.get('/taskall',getAlltasks);

export default router;