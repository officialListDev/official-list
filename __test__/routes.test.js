const request = require('supertest');
const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('Homepage Test', () => {
    it('responds with 200 status and text/html content type', () => {
      return request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200);
    });
  });

  describe('Director signup', () => {
    it('responds with 200 status and application/json content type', async (done) => {
      const data = [
        {
          'first_name': 'John',
          'last_name': 'Doe',
          'email': 'john@doe.com',
          'password': 'supersecretpassword',
          'phone_number': '8835732379',
          'company_name': 'Smith Inc.',
        },
      ];
      const result = await request(server)
        .post('/auth/director/signup')
        .send(data[0])
        .expect('Content-Type', /application\/json/)
        .expect(200);
      done();
    });
  });

  describe('Director Login', () => {
    it('responds with 200 status and application/json content type', async (done) => {
      const data = [
        {
          'email': 'john@doe.com',
          'password': 'supersecretpassword',
        },
      ];
      const result = await request(server)
        .post('/auth/director/login')
        .send(data[0])
        .expect('Content-Type', /application\/json/)
        .expect(200);
      done();
    });
  });
});
