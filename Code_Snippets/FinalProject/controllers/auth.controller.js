function getSignup(req, res) {
    res.send("Signup");
}

function getLogin(req, res) {
    res.send("Login");
}

module.exports = {
    getSignup: getSignup,
    getLogin: getLogin
};