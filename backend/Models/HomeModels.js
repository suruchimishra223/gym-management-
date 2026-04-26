import mongoose from 'mongoose';

const HomeSchema = new mongoose.Schema({
  welcomeMessage: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bannerImage: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Home', HomeSchema);
