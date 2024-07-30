import express from 'express'
import { router } from './routes' // não precisa colocar /index por que ele já entende

const server = express();

server.use(router);

export {
    server
}