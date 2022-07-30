function getSesionInputs(req) {
    const cacheInputs = req.session.cacheInputs;
    req.session.cacheInputs = null;

    if(!cacheInputs) {
        return;
    }
    return cacheInputs;
}

function storeSessionInputs(req, cacheInputs, callback) {
    req.session.cacheInputs = cacheInputs;
    req.session.save(callback);
}

module.exports = {
    getSesionInputs: getSesionInputs,
    storeSessionInputs: storeSessionInputs
};