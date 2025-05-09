const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const controller = require('../controllers/index');
const sessionStore = require('../util/sessionStorage');
const passport = require('passport');

const router = express.Router();

router.use(session({
    secret: 'jeremias',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
}))

router.use(bodyParser.urlencoded({ extended: true }));

router.use(passport.initialize());
router.use(passport.session());
require('../passport-config');

router.get('/', controller.showIndex);
router.post('/', controller.login);

router.get('/signup', controller.showPageSignUp);
router.post('/signup', controller.signUp);
router.get('/logout', controller.logout);

router.get('/members', controller.checkAuth, controller.showMembersPage);

router.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/members');
    });

router.use(controller.get404Page);

module.exports = router;
