
import multer from "multer";

// Define storage for uploaded files
const storage = multer.memoryStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // Save files in 'uploads/' directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

// Initialize Multer
const upload = multer({ storage });

export default upload;
