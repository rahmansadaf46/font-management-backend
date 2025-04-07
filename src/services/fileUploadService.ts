import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import fs from 'fs';
import { Request } from 'express';

// Ensure the uploads directory exists
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log('Uploads directory created');
}

// Storage configuration for file uploads
const storage = multer.diskStorage({
  destination: function (_req: Request, _file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) {
    cb(null, uploadDir);
  },
  filename: function (_req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

// File filter for allowing only TTF files
const fileFilter = (_req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  const validMimes = ['font/ttf', 'application/x-font-ttf', 'application/octet-stream'];
  if (validMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only TTF files are allowed'));
  }
};

const upload = multer({ storage, fileFilter });

export default upload;