const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const controller = require('../controllers/index');
const sessionStore = require('../util/sessionStorage');

const router = express.Router();

router.use(session({
    secret: 'jeremias',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
}))

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', controller.showIndex);
router.post('/', controller.login);
router.get('/signup', controller.showPageSignUp);
router.post('/signup', controller.signUp);
router.get('/members', controller.checkAuth, controller.showMembersPage);
router.get('/logout', controller.logout);
router.use(controller.get404Page);

module.exports = router;
