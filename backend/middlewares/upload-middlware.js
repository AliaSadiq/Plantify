const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './uploads/', // Directory to save the uploaded files
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`); // Append file extension
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
