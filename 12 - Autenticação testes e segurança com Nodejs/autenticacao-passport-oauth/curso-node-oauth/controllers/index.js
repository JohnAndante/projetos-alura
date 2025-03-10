const User = require("../models/user")

exports.showIndex = (req, res) => {
    res.render('index')
}

exports.showPageSignUp = (req, res) => {
    res.render('signup')
}

exports.showMembersPage = (req, res) => {
    res.render('members')
}

exports.get404Page = (req, res) => {
    res.status(404).render('404')
}

exports.login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email, password })
        if (user) {
            res.redirect('/members')
        } else {
            res.redirect('/')
        }
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
}

exports.signUp = async (req, res) => {
    const { username, email, password } = req.body

    try {
        const user = new User(username, email, password)
        await user.save();
        res.redirect('/members')
    } catch (err) {
        console.log(err)
        res.redirect('/signup')
    }
}
