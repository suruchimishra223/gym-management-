import GymHome from '../models/HomeModels.js';
import cloudinary from 'cloudinary';

// ✅ Cloudinary Config
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ CREATE
export const createHome = async (req, res) => {
  try {
    const { welcomeMessage, description } = req.body;
    let bannerImageUrl = '';

    if (req.file) {
      const result = await cloudinary.v2.uploader.upload(req.file.path);
      bannerImageUrl = result.secure_url;
    }

    const newEntry = new GymHome({
      welcomeMessage,
      description,
      bannerImage: bannerImageUrl,
    });

    await newEntry.save();
    res.status(201).json({ message: 'Gym Home Created', data: newEntry });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create Gym Home', error: error.message });
  }
};

// ✅ READ ALL
export const getAllHome = async (req, res) => {
  try {
    const entries = await GymHome.find();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch Gym Home entries', error: error.message });
  }
};

// ✅ READ ONE
export const getGymHomeById = async (req, res) => {
  try {
    const entry = await GymHome.findById(req.params.id);
    if (!entry) return res.status(404).json({ message: 'Entry not found' });
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching entry', error: error.message });
  }
};

// ✅ UPDATE
export const updateHome = async (req, res) => {
  try {
    const { welcomeMessage, description } = req.body;
    let updatedData = { welcomeMessage, description };

    if (req.file) {
      const result = await cloudinary.v2.uploader.upload(req.file.path);
      updatedData.bannerImage = result.secure_url;
    }

    const updatedEntry = await GymHome.findByIdAndUpdate(req.params.id, updatedData, { new: true });

    if (!updatedEntry) return res.status(404).json({ message: 'Entry not found' });

    res.status(200).json({ message: 'Entry updated', data: updatedEntry });
  } catch (error) {
    res.status(500).json({ message: 'Error updating entry', error: error.message });
  }
};

// ✅ DELETE
export const deleteHome = async (req, res) => {
  try {
    const deleted = await GymHome.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Entry not found' });
    res.status(200).json({ message: 'Entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting entry', error: error.message });
  }
};
