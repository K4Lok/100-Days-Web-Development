const User = require('../models/User');
const authUtil = require('../util/authentication');
const validUtil = require('../util/validation');

function getSignup(req, res) {
    res.render('customer/auth/signup');
}

async function signup(req, res) {
    if(!validUtil.signupInputsAreValid(req.body)) {
        console.log("input invalid!");
        return res.redirect('/signup');
    }

    const user = new User(
        req.body.email,
        req.body.password, 
        req.body.fullname, 
        req.body.street, 
        req.body.postal,
        req.body.city
    );

    try {
        if(await user.isEmailExists()) {
            console.log("Email existed!");
            return res.redirect('/signup');
        }
    
        await user.signup();
        res.redirect('/login');
    }
    catch(error) {
        return next(error);
    }
}

function getLogin(req, res) {
    if(res.locals.isAuth) {
        res.redirect('/');
        return;
    }

    res.render('customer/auth/login');
}

async function login(req, res) {
    const user = new User(req.body.email, req.body.password);
    const existingUser = await user.getUserWithSameEmail();

    if(!existingUser) {
        res.redirect('/login');
        return;
    }

    const passwordIsCorrect = await user.hasMatchingPassword(existingUser.password);

    if(!passwordIsCorrect) {
        res.redirect('/login');
        return;
    }

    authUtil.createUserSession(req, existingUser, function() {
        res.redirect('/');
    });

}

function logout(req, res) {
    authUtil.destroyUserAuthSession(req);
    res.redirect('/');
}

module.exports = {
    getSignup: getSignup,
    signup: signup,
    getLogin: getLogin,
    login: login,
    logout: logout
};