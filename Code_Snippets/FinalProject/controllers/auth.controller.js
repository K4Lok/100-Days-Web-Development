function getSignup(req, res) {
    res.render('customer/auth/signup');
}

function getLogin(req, res) {
    res.send("Login");
}

module.exports = {
    getSignup: getSignup,
    getLogin: getLogin
};