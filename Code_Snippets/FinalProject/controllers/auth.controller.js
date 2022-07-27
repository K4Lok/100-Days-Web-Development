function getSignup(req, res) {
    res.render('customer/auth/signup');
}

function signup(req, res) {
    
}

function getLogin(req, res) {
    res.send("Login");
}

module.exports = {
    getSignup: getSignup,
    getLogin: getLogin
};