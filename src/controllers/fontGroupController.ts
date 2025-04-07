import FontGroup from '../models/fontGroup';
import Font from '../models/font';
import { Request, Response } from 'express';

// Create a font group
export const createFontGroup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, fontIds } = req.body;

    // Check if all fonts exist in the database
    const fonts = await Font.find({ '_id': { $in: fontIds } });

    // If the fonts found do not match the requested fontIds, return an error
    if (fonts.length !== fontIds.length) {
      res.status(400).json({ message: 'Some fonts are missing' });
      return;
    }

    // Create a new font group
    const fontGroup = new FontGroup({
      name,
      fonts: fontIds,
    });

    await fontGroup.save();
    res.status(201).json({ message: 'Font group created successfully', fontGroup });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ message: 'Failed to create font group', error: errorMessage });
  }
};

// Get all font groups
export const getFontGroups = async (req: Request, res: Response): Promise<void> => {
  try {
    // Fetch only active font groups
    const fontGroups = await FontGroup.find({ isActive: true }).populate('fonts');;

    res.status(200).json(fontGroups);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ message: 'Failed to fetch font groups', error: errorMessage });
  }
};


// Update a font group
export const updateFontGroup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { groupId } = req.params;
    const { name, fontIds } = req.body;

    // Check if all fonts exist in the database
    const fonts = await Font.find({ '_id': { $in: fontIds } });

    // If the fonts found do not match the requested fontIds, return an error
    if (fonts.length !== fontIds.length) {
      res.status(400).json({ message: 'Some fonts are missing' });
      return;
    }

    // Update the font group
    const updatedGroup = await FontGroup.findByIdAndUpdate(
      groupId,
      { name, fonts: fontIds },
      { new: true }
    );

    if (!updatedGroup) {
      res.status(404).json({ message: 'Font group not found' });
      return;
    }

    res.status(200).json({ message: 'Font group updated successfully', updatedGroup });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ message: 'Failed to update font group', error: errorMessage });
  }
};


// Delete a font group
export const deleteFontGroup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { groupId } = req.params;

    const fontGroup = await FontGroup.findById(groupId);

    if (!fontGroup) {
      res.status(404).json({ message: 'Font group not found' });
      return;
    }

    fontGroup.isActive = false;
    await fontGroup.save();

    res.status(200).json({ message: 'Font group inactivated successfully' });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ message: 'Failed to inactivate font group', error: errorMessage });
  }
};

