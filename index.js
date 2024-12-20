// Importación de librerias 
// Activar y configurar servidor 
import express from 'express';

// Permisos de conexión
import cors from 'cors';

// Conexión con la base de datos PostgreSQL
import pg from 'pg';
import loginRouters from "./Routes/LoginRouter.js";
import registerRouters from "./Routes/RegisterRouter.js";
import PreguntasRouter from './Routes/PreguntasRouter.js';
import ResultadosRouter from './Routes/ResultadosRouter.js';
import getUserRouters  from "./Routes/GetUserRouter.js";
import updateUserRouters from "./Routes/GetUserRouter.js";


// Puerto con el cual se haran las llamadas al servidor 
const puerto = process.env.PORT || 8090
const app = express();

app.use(cors({origin: '*'})); 
app.use(express.json()); 

// Credenciales de la base de datos PostgreSQL
export const credenciales = new pg.Client({
    user: 'postgres.cdnepkqqjxdrcioxdnrn',
    host: 'aws-0-us-west-1.pooler.supabase.com',
    database: 'mathya',
    password: 'Mathya2024*',
    port: 5432
});

// Conexión a la base de datos PostgreSQL
credenciales.connect((err) => {
    if (err) {
        console.error("Error al conectar con la base de datos: ", err.stack);
    } else {
        console.log("Conectado a la base de datos");
    }
});

// Definición ruta 
app.use("/login", loginRouters);
app.use("/register", registerRouters);
app.use('/api', PreguntasRouter);
app.use('/resultados', ResultadosRouter);
app.use('/getUser', getUserRouters);

app.listen(puerto, () => {
    console.log(`El servidor se está ejecutando en el puerto ${puerto}`);
});
