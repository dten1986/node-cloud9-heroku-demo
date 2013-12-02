
/*
 * GET home page.
 */

module.exports = function(app) {
//  app.get('/handler', require('./handler').get);
  app.post('/handler', require('./handler').post);
};