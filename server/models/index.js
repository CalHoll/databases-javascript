var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      // Grabbing the id, text, and roomname of all messages and using a left-join
      // matching each user ID up with the corresponding user's name.
      // These messages are ordered by when they were added to the db.
      var queryStr = 'select messages.id, messages.text, messages.roomname, users.username \
                      from messages left outer join users on (messages.userid = users.id) \
                      order by messages.id desc';
      db.query(queryStr, function(err, results) {
        cb(err, results);
      });
    }, // a function which produces all the messages
    post: function (params, cb) {
      // create a message for a user id based on the given username
      var queryStr = 'insert into messages(text, userid, roomname) \
                      value (?, (select id from users where username = ? limit 1), ?)';

      // the '?''s are placeholders, for the elements in params
      db.query(queryStr, params, function(err, results) {
        cb(err, results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function (cb) {
      // Grab the id and names of all users
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        cb(err, results);
      });

    },
    post: function (params, cb) {
      // Add a user with the given name
      var queryStr = 'insert into users(username) values (?)';
      db.query(queryStr, params, function(err, results) {
        cb(err, results);
      });
    }
  }
};
