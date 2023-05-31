import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { ICities } from '../../database/models';
import { CitiesProvider } from '../../database/providers/cities';

interface IParamsProps {
    id?: number;
}

interface IBodyProps extends Omit<ICities, 'id'> {}


export const updateByIdValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(3),
    })),
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().required().moreThan(0),
    })),
}));

export const updateByID = async (req: Request<IParamsProps>, res: Response) => {

    if (!req.params.id) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'ID not informed.'
            }
        });

    }

    const result = await CitiesProvider.updateByID(req.params.id, req.body);

    if (result instanceof Error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });

    return res.status(StatusCodes.NO_CONTENT).json(result);
};