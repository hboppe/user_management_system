import 'express-async-errors';
import express, { Application, json } from 'express'
import { handleError } from './error';
import usersRouters from './routers/users';
import sessionRouter from './routers/session';

const app: Application = express();
app.use(express.json());

app.use('/users', usersRouters);
app.use('/login', sessionRouter);

app.use(handleError);

export default app
