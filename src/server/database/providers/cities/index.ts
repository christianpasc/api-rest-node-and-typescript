import * as create from './Create';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as updateById from './UpdateById';
import * as deletedById from './DeleteById';
import * as count from './Count';
export const CitiesProvider = {
    ...create,
    ...getAll,
    ...getById,
    ...updateById,
    ...deletedById,
    ...count
};