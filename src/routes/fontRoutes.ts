import express from 'express';
import { uploadFont, getFonts, deleteFont } from '../controllers/fontController';
import upload from '../services/fileUploadService';
import { Request, Response, NextFunction } from 'express';
const router = express.Router();

// Route to upload font
router.post('/upload', 
  (req: Request, res: Response, next: NextFunction) => {
    upload.single('font')(req, res, (err: unknown) => {
      if (err instanceof Error) {
        console.error('Multer Error:', err);
        return res.status(400).json({ message: err.message });
      } else if (err) {
        return next(err);
      }
      next();
    });
  }, 
  uploadFont
);
  

// Route to get all fonts
router.get('/', getFonts);

// Route to delete a font
router.delete('/:fontId', deleteFont);

export default router;
