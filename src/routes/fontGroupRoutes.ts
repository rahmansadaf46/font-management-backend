import express from 'express';
import { createFontGroup, getFontGroups, deleteFontGroup, updateFontGroup } from '../controllers/fontGroupController';

const router = express.Router();

router.post('/', createFontGroup);
router.get('/', getFontGroups);
router.put('/:groupId', updateFontGroup);
router.delete('/:groupId', deleteFontGroup);


export default router;
