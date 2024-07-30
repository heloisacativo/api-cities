import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'

interface ICity {
    name: string;
}

const bodyValidation: yup.Schema<ICity> = yup.object().shape({
    name: yup.string().required().min(3),
})

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

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
    let validatedData: ICity | undefined = undefined 
    
    try {
        validatedData = await bodyValidation.validate(req.body);
    } catch (error) {
        const yupError = error as yup.ValidationError;
        return res.json({
            errors: {
                default: yupError.message,
            }
        })
    }

    console.log(validatedData);
}
