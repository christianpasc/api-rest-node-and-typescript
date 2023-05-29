import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import knex from 'knex';
import { ICities } from '../../database/models';


interface IBodyProps extends Omit<ICities, 'id'> { }


export const createValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(3),
    }))
}));

export const create = async (req: Request<{}, {}, ICities>, res: Response) => {


    return res.status(StatusCodes.CREATED).json(1);
};