import { Request, Response } from "express";
import Font from "../models/font";

// Upload font
export const uploadFont = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { file } = req;
    if (!file) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }
    const font = new Font({
      name: file.originalname,
      path: file.path,
    });

    await font.save();
    res.status(201).json({ message: "Font uploaded successfully", font });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    res
      .status(500)
      .json({ message: "Failed to upload font", error: errorMessage });
  }
};

// Get all fonts
export const getFonts = async (req: Request, res: Response): Promise<void> => {
  try {
    const fonts = await Font.find({ isActive: true });
    res.status(200).json(fonts);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    res
      .status(500)
      .json({ message: "Failed to fetch fonts", error: errorMessage });
  }
};

// Delete font
export const deleteFont = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { fontId } = req.params;

    const font = await Font.findById(fontId);

    if (!font) {
      res.status(404).json({ message: "Font not found" });
      return;
    }

    font.isActive = false;
    await font.save();

    res.status(200).json({ message: "Font inactivated successfully" });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    res
      .status(500)
      .json({ message: "Failed to inactivate font", error: errorMessage });
  }
};
