import multer from 'multer';

const resumeStorage = (() => {
  const destination = process.env.DIR_RESUME || './MockData/Resumes';
  return multer.diskStorage({
    destination,
    filename: (req, file, cb) => {
      const filename = `${req.params.id}.pdf`;
      cb(null, filename);
    }
  });
})();

export const resumeUpload = multer({
  storage: resumeStorage,
  fileFilter: (req, file, cb) => {
    const valid = file.mimetype === 'application/pdf';
    if (!valid) {
      req.invalidFile = 'Invalid mimetype';
    }
    cb(null, valid);
  }});