// Generated by CoffeeScript 1.6.3
var hooks;

hooks = require('hooks');

hooks.before('Machines > Machines collection > Get Machines', function(transaction, done) {
  transaction.request.headers['header'] = '123232323';
  console.log('before');
  return done();
});