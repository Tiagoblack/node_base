import express,{ Request, Response}from 'express';
import dotenv from 'dotenv';
import path from 'path';

import home from './routes/home'

const server = express();
dotenv.config();

server.use(home);
server.use((req:Request, res: Response)=>{
    res.status(404).send('pagina encontrada')
})
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'))
server.use(express.static(path.join(__dirname, '../public')));


server.listen(process.env.PORT,()=>{
    console.log('rodando');
})