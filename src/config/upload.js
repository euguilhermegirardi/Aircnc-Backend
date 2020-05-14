const multer = require('multer');
// 'multer' (library) handles 'multipart form data' which is the upload of img or files...
const path = require('path'); // From Node.js.

module.exports = {
  // 'storage' = How 'multer' will store the img of this application.
  // 'diskStorage' mean the the files inside of this application.
  storage: multer.diskStorage({
    // '..', '..' because Windows has a different way to handle this path and this one is universal.
    destination: path.resolve(__dirname, '..', '..', 'uploads'), // '__dirname' means this file!
    // How the file's name will be.
    // 'callback' is the function that is fired as soon as the file is ready.
    filename: (req, file, callback) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);

      callback(null, `${name}-${Date.now()}${ext}`); // Make sure every single image is unique.
    },
  }),
};
