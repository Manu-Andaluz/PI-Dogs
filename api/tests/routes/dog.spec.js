/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const request = require('supertest-session');
const app = require('../../src/app.js');
const { Breed, conn } = require('../../src/db.js');

const agent = request(app);

const dog = {
  name: "Test2", // change number after Test
  minHeight: 2,
  maxHeight: 8,
  minWeight: 20,
  maxWeight: 50,
  minYearsLife: 5,
  maxYearsLife: 20,
  temperaments: "Happy"
}

xdescribe('Dog routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('GET /dogs', () => {
    it('should get 200', (done) => {
      agent.get('/dogs').expect(200, done)
    }
    );
  });

  describe('GET /dogs?name=', () => {
    it('should get 200', (done) => {
      agent.get('/dogs?=boxer').expect(200, done)
    }
    );

    it('should get 404', (done) => {
      agent.get('/dogs?name=testexample2022').expect(404, done)
    }
    );
  });

  describe('GET /dogs/:breedId', () => {
    it('should get 200', (done) => {
      agent.get('/dogs/5').expect(200, done)
    }
    );

    it('should get 404', (done) => {
      agent.get('/dogs/3050').expect(404, done)
    }
    );
  });

  describe('POST /dogs', () => {
    it('should get 400', (done) => {
      agent.post('/dogs').send({ nombre: "example" }).expect(400, done)
    }
    );

    it('should get 201', (done) => {
      agent.post('/dogs').send(dog).expect(201, done)
    })
  });
});
