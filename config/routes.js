'use strict';

module.exports = function (app, passport, auth) {
    var webapps = require('../app/controllers/webapps');
    var userdata = require('../app/controllers/userdatas');

    app.get('/', function (req, res) {
        res.redirect('/webapp/login');
    });

    var users = require('../app/controllers/users');
    app.get('/signin', users.signin);
    app.get('/signup', users.signup);
    app.get('/signout', users.signout);

    //Setting up the users api
    app.post('/users', users.create);

    app.get('/users/me', auth.requiresLogin, users.me);
    app.post('/users/:userId/password', auth.requiresLogin, users.password);
    app.post('/users/:userId/profile', auth.requiresLogin, users.profile);

    app.get('/userdata/:appId/:entityId', auth.requiresLogin, userdata.read);
    app.post('/userdata/:appId/:entityId', auth.requiresLogin, userdata.write);

    app.get('/apps', auth.requiresLogin, webapps.all);

    app.get('/dispatch', users.dispatch);

    //Setting the local strategy route
    app.post('/login', passport.authenticate('local'), function (req, res) {
        res.send(req.user);
    });

    //Finish with setting up the userId param
    app.param('userId', users.user);
    app.param('appId', webapps.app);

    //Home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);

};
