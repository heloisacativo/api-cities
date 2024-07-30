import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middleware";

interface ICity {
    name: string;
    state: string;
}

const bodyValidation: yup.Schema<ICity> = yup.object().shape({
    name: yup.string().required().min(3),
    state: yup.string().required().min(3),
})


interface IFilter {
    filter?: string;
}
const queryValidation: yup.Schema<IFilter> = yup.object().shape({
    filter: yup.string().required().min(3),
})


// Essa lógica aqui antes ficava aqui, foi pro Create.ts e lá foi mudada
// export const createQueryValidator:RequestHandler = async (req, res, next) => {
//     try {
//          await queryValidation.validate(req.query, {abortEarly: false});
//          return next();
//         } catch (err) {
//         const yupError = err as yup.ValidationError;
//         const errors: Record<string, string> = {};
//         yupError.inner.forEach(error => {
//             error.message
//            if (!error.path) return; // !error.path mesma coisa de error.path === undefined

//             errors[error.path] = error.message;
//         })


//         return res.status(StatusCodes.BAD_REQUEST).json({ errors })
//     }
// }


// exemplo 1
// export const create = (req: Request, res: Response) => {

//     const data: ICity = req.body;

//     console.log(data.name);

//     return res.send("Create");  
// }

// exemplo 2
// export const create = (req: Request<{}, {}, ICity>, res: Response) => {

//     console.log(req.body.name);

// }

// exemplo 3
// export const create = (req: Request<{}, {}, ICity>, res: Response) => {

//     if(req.body.name === undefined) {
//         return res.status(StatusCodes.BAD_REQUEST).send("Informe o nome")
//     }

//     console.log(req.body.name);

// }

// exemplo 4
// export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
//     let validatedData: ICity | undefined = undefined 
    
//     try {
//         validatedData = await bodyValidation.validate(req.body);
//     } catch (error) {
//         const yupError = error as yup.ValidationError;
//         return res.json({
//             errors: {
//                 default: yupError.message,
//             }
//         })
//     }

//     console.log(validatedData);
// }














export const createBodyValidator = validation('body', bodyValidation);
export const createValidation = validation('query', queryValidation);








export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
       console.log(req.body);
        
        return res.send("Create!");
    }
