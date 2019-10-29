var request = require('supertest');
var app = require('../index.js');

describe('GET /', function(){
	it('respond with hello again world', function(done) {
request(app).get('/').expect('hello again world', done);
});
});

