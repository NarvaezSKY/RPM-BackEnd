import { Router } from "express";
// import {authRequired} from '../middlewares/validateToken.js';
import {getPpto,createPptos,updatePptos,deletePptos,getAllPpto} from '../controllers/ppto.controller.js';
// import { validateSchema } from "../middlewares/validator.middleware.js";
// import { createPptoSchema } from "../schemas/task.chema.js";

const router = Router();

// router.get('/pptos',getPptos);
router.get('/pptos/:id',getPpto);
router.post('/pptos',createPptos);
router.delete('/pptos/:id',deletePptos);
router.put('/pptos/:id',updatePptos);
router.get('/pptoall',getAllPpto);

export default router;