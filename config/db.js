const MongoClient = require("mongodb").MongoClient;

//DB instance to be shared accross app
var state = {
  db: null
};

//Connection function
exports.connect = function(dbURL, done) {
  if (state.db) return done();

  MongoClient.connect(dbURL, { useNewUrlParser: true }, function(err, client) {
    if (err) return done(err);

    state.db = client.db("shopify");
    done();
  });
};

//Get DB instance function
exports.get = function() {
  return state.db;
};

//Close DB instance function
exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null;
      state.mode = null;
      done(err);
    });
  }
};
