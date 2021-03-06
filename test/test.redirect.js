/* eslint-env mocha */
var app     = require('../web');
var assert  = require('chai').assert;
var helpers = require('./helpers');
var nock    = require('nock');
var request = require('supertest');

var agent = request.agent(app);

describe("Redirects", function () {

// Nock sure does its best to make testing Express a pain in the ass.
beforeEach(function () {
  nock.enableNetConnect('127.0.0.1');
});

describe("absolute", function () {
  describe("with implied 302", function () {
    helpers.useNockFixture('redirect-absolute-implied-302.json');

    var url = '/rgrove/c8a5c5311b19c5cb117f/raw/690361e0338b7e305e1e0b2531b13ee7e4894bff/absolute-302-implied.js';

    it("should result in a 302 redirect", function (done) {
      agent.get(url)
        .expect(302)
        .expect('cache-control', 'max-age=300')
        .expect('location', 'http://example.com/')
        .end(done);
    });
  });

  describe("with explicit 302", function () {
    helpers.useNockFixture('redirect-absolute-explicit-302.json');

    var url = '/rgrove/c8a5c5311b19c5cb117f/raw/5ec8717c9cee8d019cc74699088d43bd85765b77/absolute-302-explicit.js';

    it("should result in a 302 redirect", function (done) {
      agent.get(url)
        .expect(302)
        .expect('cache-control', 'max-age=300')
        .expect('location', 'http://example.com/')
        .end(done);
    });
  });

  describe("with explicit 301", function () {
    helpers.useNockFixture('redirect-absolute-301.json');

    var url = '/rgrove/c8a5c5311b19c5cb117f/raw/74ed8a28fdfa12290ac2c289b5fb405937a50e2f/absolute-301.js';

    it("should result in a 301 redirect", function (done) {
      agent.get(url)
        .expect(301)
        .expect('cache-control', 'max-age=300')
        .expect('location', 'http://example.com/')
        .end(done);
    });
  });
});

describe("relative", function () {
  helpers.useNockFixture('redirect-relative.json');

  var url = '/rgrove/c8a5c5311b19c5cb117f/raw/327dcbfd1644623fe1d8b866ba4760d2bc78989d/relative.js';

  it("should redirect to a relative URL", function (done) {
    agent.get(url)
      .expect(302)
      .expect('cache-control', 'max-age=300')
      .expect('location', '../foo.js')
      .end(done);
  });
});

describe("protocol-relative", function () {
  helpers.useNockFixture('redirect-protocol-relative.json');

  var url = '/rgrove/c8a5c5311b19c5cb117f/raw/99c7ca22c3bef2f56dd5fb00bf59f84bda17640e/protocol-relative.js';

  it("should redirect to a protocol-relative URL", function (done) {
    agent.get(url)
      .expect(302)
      .expect('cache-control', 'max-age=300')
      .expect('location', '//example.com/')
      .end(done);
  });
});

describe("non-HTTP URL", function () {
  helpers.useNockFixture('redirect-non-http.json');

  var url = '/rgrove/c8a5c5311b19c5cb117f/raw/f9d3f40fe612dd79dc8cae17f6ae68b6a7bcd538/bogus-local-file.js';

  it("should not be redirected", function (done) {
    agent.get(url)
      .expect(200, '!rawgit-redirect file://foo;')
      .expect('content-type', 'application/javascript;charset=utf-8')
      .expect(function (res) {
        assert.isUndefined(res.get('location'));
      })
      .end(done);
  });
});

});
