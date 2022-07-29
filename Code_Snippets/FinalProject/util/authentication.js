function createUserSession(req, user, callback) {
    req.session.uid = user._id.toString();
    req.session.save(callback);
}

function destroyUserAuthSession(req) {
    req.session.uid = null;
    req.session.save();
}

module.exports = {
    createUserSession: createUserSession,
    destroyUserAuthSession: destroyUserAuthSession
};