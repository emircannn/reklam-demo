import multer from 'multer';

 export const config = {
   api: {
     bodyParser: false,
   },
 };

const storage = multer.diskStorage({
  destination: 'public/orders/',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = file.originalname.split('.').pop();
    cb(null, `${file.fieldname}-${uniqueSuffix}.${fileExtension}`);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 100 // 5MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'application/pdf'
     || file.mimetype === 'application/x-zip-compressed' || file.mimetype === 'application/postscript' || file.mimetype === 'image/tiff') {
      cb(null, true);
    } else {
      cb(new Error('Desteklenmeyen dosya türü!'), false);
    }
  }
});

export default function handler(req, res) {
  upload.single('file')(req, res, (err) => {
    if (err) return res.status(400).json({ message: err.message });
    res.status(200).json({ message: 'Dosya yükleme başarılı', path: req.file.filename});
  });
}