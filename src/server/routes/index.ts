import { Router } from 'express' //  você está criando uma instância de um roteador, que é uma miniaplicação capaz de gerenciar um conjunto de rotas. Esse roteador funciona como um middleware, permitindo que você separe as rotas e o processamento de pedidos da sua aplicação em módulos independentes e organizados.

const router = Router();

router.get('/', (req, res) => {
    return res.send('Hello World')
})

export { router
}