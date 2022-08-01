const multer = require('multer');
const uuid = require('uuid').v4;

const upload = multer({
    storage: multer.diskStorage({
        destination: 'product-data/images',
        filename: function(req, file, callback) {
            callback(null, uuid() + '-' + file.originalname);
        }
    })
});

const configuredMulter = upload.single('image');

module.exports = configuredMulter;