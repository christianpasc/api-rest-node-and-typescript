import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cities - Get All', () => {

    it('Get All Registers', async () => {

        const res1 = await testServer
            .post('/cities')
            .send({ name: 'New York' });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resSearch = await testServer
            .get('/cities')
            .send();

        expect(Number(resSearch.header['x-total-count'])).toBeGreaterThan(0);
        expect(resSearch.statusCode).toEqual(StatusCodes.OK);
        expect(resSearch.body.length).toBeGreaterThan(0);
    });

});