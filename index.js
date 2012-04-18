module.exports = process.env.NU_COV
   ? require('./lib-cov/nu')
   : require('./lib/nu');