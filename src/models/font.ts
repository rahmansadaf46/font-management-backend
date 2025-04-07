import mongoose from 'mongoose';

const fontSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const Font = mongoose.model('Font', fontSchema);

export default Font;
