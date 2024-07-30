import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema, ValidationError } from 'yup';


type TValidation = (field: 'body' | 'header' | 'params' | 'query', schema: Schema<any>) => RequestHandler;

// export const validation: TValidation = () => {
//     return async (req, res, next) =>  {
//         console.log("Test!")
// }
// };

export const validation: TValidation = (field, schema) => async (req, res, next) =>  {
    // Antes
    //     try {
    //         await queryValidation.validate(req.query, {abortEarly: false});
    //         return next();
    //        } catch (err) {
    //        const yupError = err as yup.ValidationError;
    //        const errors: Record<string, string> = {};
    //        yupError.inner.forEach(error => {
    //            error.message
    //           if (!error.path) return; // !error.path mesma coisa de error.path === undefined
   
    //            errors[error.path] = error.message;
    //        })
   
   
    //        return res.status(StatusCodes.BAD_REQUEST).json({ errors })
    //    }

        try {
            await schema.validate(req[field], {abortEarly: false});
            return next();
           } catch (err) {
           const yupError = err as ValidationError;
           const errors: Record<string, string> = {};
           yupError.inner.forEach(error => {
               error.message
              if (!error.path) return; // !error.path mesma coisa de error.path === undefined
   
               errors[error.path] = error.message;
           })
   
           return res.status(StatusCodes.BAD_REQUEST).json({ errors })
       }
};

