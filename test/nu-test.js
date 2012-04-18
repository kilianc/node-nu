var should = require('should'),
    nu = require('../');

var Person = function (name) {
  this.name = name;
};

Person.prototype = {
  hi: function () {
    // Hey dude!
  }
};

var kilian;

describe('nu', function () {
  before(function () {
    kilian = nu.call(Person, 'kilian', '26');
  });
  it('should allocate an object of the right type', function () {
    should.exist(kilian);
    kilian.should.be.instanceof(Person);
  });
  it('should call the constructor', function () {
    kilian.should.have.property('name');
    kilian.name.should.be.equal('kilian');
  });
});