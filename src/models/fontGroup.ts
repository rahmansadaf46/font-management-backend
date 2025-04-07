import mongoose from 'mongoose';

const fontGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fonts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Font',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const FontGroup = mongoose.model('FontGroup', fontGroupSchema);

export default FontGroup;
