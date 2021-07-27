import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import dummyRoutes from './routes/dummy';

dotenv.config();

const port: string = process.env.PORT!;

const app: Express = express();

/**
 * CONFIGURE
 */

app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * ROUTES
 */

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hey!</h1> <h2> Visit /dummy/ and /dummy/:id routes </h2>');
});

app.use('/dummy', dummyRoutes);

/**
 * START SERVER
 */

app.listen(port, () => console.log(`App listening on port ${port}`));