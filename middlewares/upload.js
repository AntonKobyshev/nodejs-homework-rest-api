const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, '../', 'temp');
const size = 5 * 1024 * 1024;

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: size,
  },
});

const upload = multer({
    storage: multerConfig
})

module.exports = upload;