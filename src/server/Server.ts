import express from 'express'
import 'dotenv/config'
import { router } from './routes' // não precisa colocar /index por que ele já entende

const server = express();

server.use(express.json())
server.use(router);

export {
    server
}