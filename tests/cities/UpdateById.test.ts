import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cities - Update By Id', () => {


    it('Update Register', async () => {

        const res1 = await testServer
            .post('/cities')
            .send({ name: 'New York' });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);


        const resUpdated = await testServer
            .put(`/cities/${res1.body}`)
            .send({ name: 'New' });

        expect(resUpdated.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });

    it('Update Register - not found', async () => {

        const res1 = await testServer
            .put('/cities/99999')
            .send({name: 'New'});

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');

    });

});