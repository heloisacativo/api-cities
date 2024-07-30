import { Router } from 'express' //  você está criando uma instância de um roteador, que é uma miniaplicação capaz de gerenciar um conjunto de rotas. Esse roteador funciona como um middleware, permitindo que você separe as rotas e o processamento de pedidos da sua aplicação em módulos independentes e organizados.
import { StatusCodes } from 'http-status-codes'
const router = Router();

// router.get('/', (req, res) => {
//     return res.send('Hello World')
// })

// router.post('/test', (req, res) => {
//     console.log(req.body);

//     return res.send('Test!');
// })

// router.post('/test', (req, res) => {
//     console.log(req.body);

//     return res.json('Test!');
// })

// router.post('/test', (req, res) => {
//     console.log(req.query.test); // http://localhost:3333/test?test=hello

//     return res.json('Test!');
// })

router.post('/test', (req, res) => {
    console.log(req); // http://localhost:3333/test?test=ola

    return res.status(StatusCodes.ACCEPTED).json('Test!');
})

export { router
}