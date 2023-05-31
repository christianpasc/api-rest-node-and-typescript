import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICities } from '../../models';

export const getByID = async (id: number): Promise<ICities | Error> => {
    try {
        const result = await Knex(ETableNames.city)
            .select('*')
            .where('id', '=', id)
            .first();

        if (result) return result;

        return new Error('Register not found!');

    } catch (error) {
        console.log(error);
        return new Error('Register not found!');
    }

};