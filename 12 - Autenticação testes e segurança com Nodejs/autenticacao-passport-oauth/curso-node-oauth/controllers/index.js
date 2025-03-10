const { compare, hash } = require("bcrypt");
const User = require("../models/user");

exports.showIndex = (req, res) => {
    res.render('index');
}

exports.showPageSignUp = (req, res) => {
    res.render('signup');
}

exports.showMembersPage = (req, res) => {
    res.render('members');
}

exports.get404Page = (req, res) => {
    res.status(404).render('404');
}

const validateUserCredentials = (credentials = {}, user = null) => {
    try {
        const { password } = credentials;

        const isMatch = compare(password, user.password);

        if (isMatch) return true;

        return false;
    } catch (err) {
        return false
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        const valid = validateUserCredentials({ email, password }, user);

        if (!valid) return res.redirect('/');

        req.session.user = user;
    } catch (err) {
        console.log(err)
        res.redirect('/');
    }
}

exports.signUp = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await hash(password, 12);
        const user = new User(username, email, hashedPassword);
        await user.save();
        res.redirect('/members');
    } catch (err) {
        console.log(err)
        res.redirect('/signup');
    }
}

exports.checkAuth = (req, res, next) => {
    const { session } = req;

    if (session && session.user) {
        next();
    }

    res.redirect('/');
}

exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) console.log(err);
        res.redirect('/');
    });
}


