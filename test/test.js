var assert = require('assert');
var routes = require('../routes');
var server = require('../server')();


describe('Home', function(){

  describe('Route exists', function() {
    it('Returns 200', function() {
        var status = 200;

      // Test that 200 response is returned
      assert.equal(status, 200);
    });
  });

  describe('expected data returned from routes', function() {

    // Make sure an object is returned
    it('Expected object data type', function() {
      routes['/'].fn({}, {
        json: function(data) {
          assert.equal(typeof data, 'object');
        }
      });
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
