import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cities - Delete By Id', () => {

    it('Delete Register', async () => {

        const res1 = await testServer
            .post('/cities')
            .send({ name: 'New York' });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);


        const resDeleted = await testServer
            .delete(`/cities/${res1.body}`)
            .send();

        expect(resDeleted.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });

    it('Delete Register not found', async () => {

        const res1 = await testServer
            .delete('/cities/99999')
            .send();

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');

    });


});