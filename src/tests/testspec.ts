import supertest from 'supertest';

import app from '..';

import sharp1 from '../sharp1';

import { fileExist1 } from '../filedexits1';

describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const request = supertest(app);

    const response = await request.get('/images/sant.jpg/900/900');

    expect(response.status).toBe(200);
  });

  it('check file generated asyc function', async () => {
    sharp1('ice.jpg');
    const b = 'ice.jpg';

    return fileExist1(b).then(result => {
      expect(result).toBe('done1');
    });
  });
});
