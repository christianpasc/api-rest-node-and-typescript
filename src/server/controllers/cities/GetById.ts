import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { CitiesProvider } from '../../database/providers/cities';

interface IParamsProps {
    id?: number;
}

export const getByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().required().moreThan(0),
    }))
}));

export const getByID = async (req: Request<IParamsProps>, res: Response) => {

    if (!req.params.id) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'ID not informed.'
            }
        });

    }

    const result = await CitiesProvider.getByID(req.params.id);

    if (result instanceof Error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });

    return res.status(StatusCodes.OK).json(result);
};