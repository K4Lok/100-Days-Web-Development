function checkAuthStatus(req, res, next) {
    const uid = req.session.uid;
    const isAdmin = req.session.isAdmin;

    if(!uid) {
        return next();
    }

    res.locals.uid = uid;
    res.locals.isAuth = true;
    res.locals.isAdmin = isAdmin;
    next();
}

module.exports = checkAuthStatus;