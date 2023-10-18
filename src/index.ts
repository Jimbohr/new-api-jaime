import './loadEnvironment.js';
import express, {type Express, type Request, type Response} from 'express';

// Initialize express
const app: Express = express();
const port = process.env.HOST_PORT ?? '3000';

const listaClase = ['Garrido Pintado, Albert', 'Rodellar Martínez, Alberto', 'Muñoz Valenzuela, Alejandro', 'Pascual González, Alejandro', 'Blay Estrada, Alex', 'Bautista Martin, Brian', 'Llamas Masdeu, Dídac', 'Soto Gómez, Eugeni', 'Du Pre Peralta, Gerard', 'Higueras Rubiño, Jaime', 'Gàndara Sánchez, Jaume', 'Linares Vigo, Joan', 'Simón Pérez, Kevin', 'Sánchez Erazo, Luis Mario', 'Ros Puig, Manuel', 'Najarro García, Marc', 'Sans Lleixà, Martí', 'Argueta Navarrete, Nahomy Fernanda', 'Sanz Sanchez, Oscar', 'Condal García, Pol', 'Trujillo Albert, Pol', 'Pallarés Sirvent, Quim', 'Herrerias Cuscullola, Rafel', 'Trujillo Guadiamos, Victor Manuel'];
const numTotalLista = listaClase.length;

// eslint-disable-next-line arrow-body-style
app.get('/listaClase', (req: Request, res: Response) => res.json({listaClase}));
// eslint-disable-next-line arrow-body-style
app.get('/numTotalLista', (req: Request, res: Response) => res.json({numTotalLista}));
// eslint-disable-next-line arrow-body-style
app.get('/', (req: Request, res: Response) => {
	return res.send({listaClase, numTotalLista});
});
app.listen(process.env.HOST_PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}!`);
});

export default app;
