const multer = require("multer");
const path = require("path");

// Set up Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, "../assets/images"); // Path to assets/images folder
        cb(null, uploadPath); // Specify the folder
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`; // Generate a unique filename
        cb(null, uniqueName);
    },
});

// File filter to accept only image files
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true); // Accept file
    } else {
        cb(new Error("Only image files are allowed!"), false); // Reject file
    }
};

// Initialize Multer with the storage and file filter
const upload = multer({
    storage,
    fileFilter,
});

module.exports = upload;
