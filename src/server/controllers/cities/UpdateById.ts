import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';

interface IParamsProps {
    id?: number;
}

interface IBodyProps {
    name: string;
}

export const updateByIdValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(3),
    })),
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().required().moreThan(0),
    })),
}));

export const updateByID = async (req: Request<IParamsProps>, res: Response) => {

    console.log(req.params);
    console.log(req.body);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');
};