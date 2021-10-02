import supertest from 'supertest';
import app from '..';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('gets the api endpoint', async done => {
    const response = await request.get('/images/sant.jpg/900/900');
    expect(response.status).toBe(200);
    done();
  });
});
