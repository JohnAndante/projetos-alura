const { compare } = require("bcrypt");
const User = require("../models/user");
const { hash } = require('bcryptjs');

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

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user) {
            const isMatch = await compare(password, user.password);

            if (isMatch) res.redirect('/members');
        }

        res.redirect('/');
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
    const auth = true;

    if (!auth) {
        res.redirect('/');
    }

    next();
}
