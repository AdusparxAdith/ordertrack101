const MongoClient = require("mongodb").MongoClient;
var collection;

var state = {
  db: null
};

exports.connect = function(dbURL, done) {
  if (state.db) return done();

  MongoClient.connect(dbURL, { useNewUrlParser: true }, function(err, client) {
    if (err) return done(err);

    state.db = client.db("shopify");
    done();
  });
};

exports.get = function() {
  return state.db;
};

exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null;
      state.mode = null;
      done(err);
    });
  }
};
