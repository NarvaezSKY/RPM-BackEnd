import express from "express";
import morgan from "morgan";
import cookieParser from 'cookie-parser';
import taskRoutes from './routes/task.routes.js';
import rutaRoutes from './routes/ruta.routes.js';
import pptoRoutes from './routes/ppto.routes.js';
import motosRoutes from './routes/motos.routes.js'
import motoviajerosRoutes from "./routes/motoviajeros.routes.js";
// import cors from 'cors';


const App = express();
// App.use(cors({
//     origin: 'http://localhost:5173',
//     credentials: true,
// }));

App.use(morgan('dev'));
App.use(express.json());
App.use(cookieParser());

// App.use("/api",taskRoutes);


App.use("/api",motosRoutes);
App.use("/api",rutaRoutes);
App.use("/api",pptoRoutes);
App.use("/api",motoviajerosRoutes);


export default App;
