const User = require('../models/User');
const authUtil = require('../util/authentication');
const validUtil = require('../util/validation');
const cacheUtil = require('../util/cache-input');

function getSignup(req, res) {
    let cacheInputs = cacheUtil.getSesionInputs(req);

    if(!cacheInputs) {
        cacheInputs = {
            email: '',
            'confirm-email': '',
            password: '', 
            fullname: '', 
            street: '', 
            postal: '',
            city: ''
        };
    }

    res.render('customer/auth/signup', {inputData: cacheInputs});
}

async function signup(req, res, next) {
    if(!validUtil.signupInputsAreValid(req.body)) {
        // console.log("input invalid!");
        cacheUtil.storeSessionInputs(req, {
            errorMessage: 'Your inputs are not valid!',
            ...req.body
        }, function() {
            res.redirect('/signup');
        });
        return;
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
            // console.log("Email existed!");
            cacheUtil.storeSessionInputs(req, {
                errorMessage: 'Email exists, try login instaed!',
                ...req.body
            }, function() {
                res.redirect('/signup');
            });
            return;
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

    let cacheInputs = cacheUtil.getSesionInputs(req);

    if(!cacheInputs) {
        cacheInputs = {
            email: '',
        };
    }
    cacheInputs.password = '';
    
    res.render('customer/auth/login', {inputData: cacheInputs});
}

async function login(req, res) {
    const user = new User(req.body.email, req.body.password);
    const existingUser = await user.getUserWithSameEmail();

    if(!existingUser) {
        cacheUtil.storeSessionInputs(req, {
            errorMessage: 'User not exists!',
            ...req.body
        }, function() {
            res.redirect('/login');
        });
        return;
    }

    const passwordIsCorrect = await user.hasMatchingPassword(existingUser.password);

    if(!passwordIsCorrect) {
        cacheUtil.storeSessionInputs(req, {
            errorMessage: 'Password is not correct!',
            ...req.body
        }, function() {
            res.redirect('/login');
        });
        return;
    }

    authUtil.createUserSession(req, existingUser, function() {
        res.redirect('/');
    });

}

function logout(req, res) {
    authUtil.destroyUserAuthSession(req);
    res.redirect('/login');
}

module.exports = {
    getSignup: getSignup,
    signup: signup,
    getLogin: getLogin,
    login: login,
    logout: logout
};