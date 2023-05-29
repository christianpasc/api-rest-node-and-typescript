import { ICities } from '../../models';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';

export const create = async (city: Omit<ICities, 'id'>): Promise <number | Error> => {
    try {
        const [result] = await  Knex(ETableNames.city).insert(city).returning('id');

        if(typeof result === 'object'){
            return result.id;
        } else if (typeof result === 'number'){
            return result;
        }
        return Error('Error registering!');

    } catch (error) {
        return Error('Error registering!');
    }

};