import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cities - Create', () => {

    it('Create Register', async () => {

        const res1 = await testServer
            .post('/cities')
            .send({ nome: 'New York' });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual('number');
    });

    it('Create Register with name to short', async () => {

        const res1 = await testServer
            .post('/cities')
            .send({ nome: 'Ne' });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.name');
    });
});