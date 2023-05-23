import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cities - Get By Id', () => {

    it('Get Register by id', async () => {

        const res1 = await testServer
            .post('/cities')
            .send({ name: 'New York' });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);


        const resSearch = await testServer
            .get(`/cities/${res1.body}`)
            .send();

        expect(resSearch.statusCode).toEqual(StatusCodes.OK);
        expect(resSearch.body).toHaveProperty('name');
    });

    it('Get Register not found', async () => {

        const res1 = await testServer
            .get('/cities/99999')
            .send();

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');

    });


});