var assert = require('assert');
var request = require('supertest');
var app = require('../server').app;

describe('Home', function(){

  describe('Route exists', function() {
    it('Returns 200', function(done) {
      request(app)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        assert.equal(res.status, 200);
        done();
      });
    });
  });

  describe('expected data returned from routes', function() {

    // Make sure an object is returned
    it('Expected object data type', function() {

      assert.equal(typeof data, 'object');

    });

    // Checks for foo property in data exist
    it('Does the foo exist', function() {
      assert.equal(data.hasOwnProperty('foo'), true);
    });

    // Does foo equal hello world
    it('Expect foo to equal hello world', function() {
      assert.equal(data['foo'], 'hello world');
    });
  });
});
