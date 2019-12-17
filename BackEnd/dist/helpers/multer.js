"use strict";

var multer = require('multer');

var resumeStorage = function () {
  var destination = process.env.DIR_RESUME || './MockData/Resumes';
  return multer.diskStorage({
    destination: destination,
    filename: function filename(req, file, cb) {
      var filename = "".concat(req.params.id, ".pdf");
      cb(null, filename);
    }
  });
}();

var resumeUpload = multer({
  storage: resumeStorage,
  fileFilter: function fileFilter(req, file, cb) {
    try {
      var valid = file.mimetype === 'application/pdf';

      if (!valid) {
        req.invalidFile = 'Invalid mimetype';
      }

      cb(null, valid);
    } catch (e) {
      cb(e);
    }
  }
});
module.exports = {
  resumeUpload: resumeUpload
};