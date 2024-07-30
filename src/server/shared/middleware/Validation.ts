import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema, ValidationError } from 'yup';

type TProperty = 'body' | 'header' | 'params' | 'query';

type TAllSchemas = Record<TProperty, Schema<any>>
type TValidation = (schemas: Partial<TAllSchemas>) => RequestHandler;

// export const validation: TValidation = () => {
//     return async (req, res, next) =>  {
//         console.log("Test!")
// }
// };

export const validation: TValidation = (schemas) => async (req, res, next) =>  {
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
    
    //    }

        const errorsResult: Record<string, Record<string, string>> = {};

       Object.entries(schemas).forEach(([key, schema]) => {
        try {
            schema.validateSync(req[key as TProperty], {abortEarly: false});
            // return next();
           } catch (err) {
           const yupError = err as ValidationError;
           const errors: Record<string, string> = {};
           yupError.inner.forEach(error => {
               error.message
              if (!error.path) return; // !error.path mesma coisa de error.path === undefined
   
               errors[error.path] = error.message;
           })

           errorsResult[key] = errors;
   
        //    return res.status(StatusCodes.BAD_REQUEST).json({ errors })
       }
       })

       if (Object.entries(errorsResult).length === 0) {
        return next();
       } else {
        return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult })

       }

        
};

