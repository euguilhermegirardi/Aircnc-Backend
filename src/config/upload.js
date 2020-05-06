const multer = require('multer');
const path = require('path'); // From Node.js

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'), // this file, one up, one up, find 'uploads'
    filename: (req, file, callback) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);

      callback(null, `${name}-${Date.now()}${ext}`); // Make sure every single image is unique.
    },
  }),
};
