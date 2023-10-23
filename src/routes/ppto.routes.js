import { Router } from "express";
// import {authRequired} from '../middlewares/validateToken.js';
import {getPpto,createPptos,updatePptos,deletePptos,getAllPpto} from '../controllers/ppto.controller.js';
// import { validateSchema } from "../middlewares/validator.middleware.js";
// import { createPptoSchema } from "../schemas/task.chema.js";

const router = Router();

// router.get('/pptos',getPpto);
router.get('/pptos',getAllPpto);
router.get('/pptos/:id',getPpto);
router.post('/pptos',createPptos);
router.delete('/pptos/:id',deletePptos);
router.put('/pptos/:id',updatePptos);


export default router;