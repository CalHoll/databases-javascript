var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // call the get in models, pass callback function to modify response
      models.messages.get(function(err, results) {
        if (err) {
          // send 404?
        }
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // bulid an array of username, message, and roomname [username, message, roomname]
      // call the post in models, pass it the array of parameters and a callback
      // callback: send a 201 if post was successful
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, function(err, results) {
        if (err) {
          // send 404?
        }
        res.sendStatus(201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      // call models.users.get and pass in a callback with err and results from query
      // using results, we update our response, json field.
      models.users.get(function(err, results) {
        if (err) {
          // send 404?
        }
        res.json(results);
      });
    },
    post: function (req, res) {
      // build an array with a username [username]
      // call models.users.post and pass it the username and a callback
      // callback gets errors and results: if successful, send a 201
      models.users.post(req.body.username, function(err, results) {
        if (err) {
          // send 404?
        }
        res.sendStatus(201);
      });
    }
  }
};
