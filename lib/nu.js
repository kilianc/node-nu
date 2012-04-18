function nu() {
  var obj = Object.create(this.prototype);
  this.apply(obj, arguments);
  return obj;
}

module.exports = nu;